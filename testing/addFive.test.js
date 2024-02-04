const {default: TestRunner} = require("jest-runner");
const addFive = require('./app');
test('returns the number plus 5', () => {
    expect(app(1)).toBe(6);
});