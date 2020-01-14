module.exports = str => {
  if (!str) throw new Error('wrong input value!!');
  if (isNaN(str)) return 'string';
  const num = Number(str);
  if (num % 1) return 'double';
  return 'integer';
};
