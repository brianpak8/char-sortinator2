const sortinate = (string) => {
  return string.split('')
  .sort((a, b) => {
    return a - b;
  })
  .join('');
}

module.exports.sortinate = sortinate;
