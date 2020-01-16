# json2query

Converts json array into mysql query

## Installation

Using npm:

```bash
$ npm install json2query
```

Using npm:

```bash
$ yarn add json2query
```

## Example

### note: CommonJS usage

```bash
const json2query = require('json2query');
```

### json2query(tableName, jsonArray)

```js
const userList = [
  {
    name: 'jack',
    height: '174.0',
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

json2query('Users', userList);
```
### result
```sql
Create Table If Not Exists Users (name VARCHAR(6), height DOUBLE, age INT, cellPhone VARCHAR(20)); Insert Into Users Values ("jack", "174.0", "27", "010-0000-0000"), ("haena", "164.5", "26", "010-0000-0000"), ("mark", "174.2", "27", NULL), (NULL, "174.0", "27", "010-0000-0000");
```

## How it works

`json2query` auto-creates table creation query with the first element of json array. The types of columns are determined with their values.
There are three types in json2query.

- VARCHAR()
- INT
- DOUBLE

If the type of value is string, it returns type `VARCHAR`. (length is determined as x1.5 of the lenght of it's value)
If the type is number, it checks if it's int or double with regular expression. then if returns type `INT` or `DOUBLE`.
In the last case, if the value is `null` or `undefined`, it just returns `VARCHAR(100)`

For example, if the first element of array is like below,

```js
{
  name: 'jack',
  height: '174.0',
  age:27,
  cellPhone: null,
}
```

It'll create query below

```sql
Create Table If Not Exists Users (name VARCHAR(4*1.5), height DOUBLE, age INT, cellPhone VARCHAR(100));
```
