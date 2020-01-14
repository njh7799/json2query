const typechecker = require('./typechecker');

module.exports = str => {
  const keyType = typechecker(str);
  if (keyType === 'string') {
    const len = str.length;
    const largeLen = Math.round(len * 1.5);
    return `VARCHAR(${largeLen})`;
  }
  if (keyType === 'integer') {
    return `INT`;
  }
  if (keyType === 'double') {
    return `DOUBLE`;
  }
  throw new Error('wrong input value!!');
};
