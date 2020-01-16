const reg = /\d+\.\d+/;

module.exports = str => {
  if (!str) return 'null';
  if (isNaN(str)) return 'string';
  const num = Number(str);
  if (reg.exec(str)) return 'double';
  return 'integer';
};
