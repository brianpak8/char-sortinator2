const sortinate = (string) => {
  console.log('string', string, typeof string);
  return string.split('')
  .sort((a, b) => {
    return a - b;
  })
  .join('');
}

module.exports.sortinate = sortinate;
