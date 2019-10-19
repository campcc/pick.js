# pick.js

![npm](https://img.shields.io/npm/dm/pick.js)

Utility function to create a shallow copy of an object which is composed of the picked object properties.

## Usage

```bash
npm install pick.js --save
```

```js
import pick from 'pick.js'
var campcc = { name: 'capmcc', age: 18, career: 'engineer' }
pick(capmcc, 'age') // { age: 18 }
pick(campcc, ['age', 'enginner']) // { age: 18, career: 'engineer' }
```

## API

### pick(obj: object, properties: string | string[]) : object

return a shallow copy which is composed of the picked object properties.

## LICENSE

[MIT](https://choosealicense.com/licenses/mit/)
