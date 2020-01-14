var type = require("type-detect");

module.exports = inputValidator = (tableName, jsonData) => {
  if (type(tableName) !== "string")
    throw new Error("tableName must be string!!");
  if (type(jsonData) !== "Array") throw new Error("json data must be array!!");
  if (jsonData.length === 0) throw new Error("json data is empty!!");
};
