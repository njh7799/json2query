# json2query

Converts json array into mysql query

# Installation

Using npm:

```bash
$ npm install json2query
```

Using npm:

```bash
$ yarn add json2query
```

# Example

## note: CommonJS usage

```bash
const json2query = require('json2query');
```

## json2query(tableName, jsonArray)

```js
const user = [
  {
    name: 'jack',
    height: '174.2',
    age: 27,
    cellPhone: '010-0000-0000',
  },
  {
    name: 'haena',
    height: '164.5',
    age: 26,
    cellPhone: '010-0000-0000',
  },
  {
    name: 'mark',
    height: '174.2',
    age: 27,
  },
  {
    height: '174.0',
    age: 27,
    cellPhone: '010-0000-0000',
  },
];

json2query('Users', user);
// =>
// Create Table If Not Exists Users (name VARCHAR(6), height DOUBLE, age INT, cellPhone VARCHAR(20)); Insert Into Users Values ("jack", "174.2", "27", "010-0000-0000"), ("haena", "164.5", "26", "010-0000-0000"), ("mark", "174.2", "27", NULL), (NULL, "174.0", "27", "010-0000-0000");
//
```
