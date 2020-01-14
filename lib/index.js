const inputValidator = require('./validator');
const typeformatter = require('./typeformatter');

const json2query = (tableName, jsonData) => {
  inputValidator(tableName, jsonData);
  const createQuery = makeCreateQuery({ tableName, jsonData });
  const insertQuery = makeInsertQuery({ tableName, jsonData });
  const query = `${createQuery} ${insertQuery}`;
  return query;
};

const makeCreateQuery = ({ tableName, jsonData }) => {
  const entries = Object.entries(jsonData[0]);
  const columnDefArray = entries.map(
    entry => `${entry[0]} ${typeformatter(entry[1])}`,
  );
  const columnDefs = columnDefArray.join(', ');
  const query = `Create Table If Not Exists ${tableName} (${columnDefs});`;
  return query;
};

const formatRow = ({ columns, row }) => {
  const formattedRow = columns.map(column =>
    row[column] ? `"${row[column]}"` : 'NULL',
  );
  const value = formattedRow.join(', ');
  return value;
};

const makeInsertQuery = ({ tableName, jsonData }) => {
  const columns = Object.keys(jsonData[0]);

  const valueArray = jsonData.map(row => `(${formatRow({ columns, row })})`);
  const values = valueArray.join(', ');
  const query = `Insert Into ${tableName} Values ${values};`;
  return query;
};

module.exports = json2query;
