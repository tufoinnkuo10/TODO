function add(x, y) {
  if (typeof x === 'string' || typeof y === 'string') {
    throw new Error('only numbers are accepted')
  }

  return x + y;

}
module.exports = add;