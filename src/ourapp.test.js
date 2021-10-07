const add = require('./ourapp.js');

test('adding two numbers', () => {
  const x = 4, y = 6;
  const sum = add(x, y);
  expect(sum).toBe(10)

})