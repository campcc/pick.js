function pick(obj, properties) {
  const isArray = Object.prototype.toString.call(properties) === '[object Array]'
	const isString = typeof properties === 'string'
	const isValid = isArray || isString
	const formatProperties = isString ? [properties] : properties
	const length = formatProperties.length
	const result = {}
	if (isValid) {
		formatProperties.forEach(key => result[key] = obj[key])
		return length ? result : {...obj}
	} else {
		throw new TypeError('properties expect an array or a string.')
	}
}

export default pick
