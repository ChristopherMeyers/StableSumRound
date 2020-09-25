var assert = require('assert');
var stableSumRound = require('../lib/StableSumRound.js')

describe('Adjust Up', function () {
  it('Should round up closest value', function () {
    assert.deepStrictEqual(stableSumRound(2, [13.3333, 23.3334, 33.3333]), [13.33, 23.34, 33.33]);
  });
  it('Should round up closest value to hundreds', function () {
    assert.deepStrictEqual(stableSumRound(-2, [133333, 233334, 333333]), [133300, 233400, 333300]);
  });
  it('Should round up first value on ties', function () {
    assert.deepStrictEqual(stableSumRound(2, [13.3333, 13.3333, 13.3333]), [13.34, 13.33, 13.33]);
  });
});

describe('Adjust Down', function () {
  it('Should round down closest value', function () {
    assert.deepStrictEqual(stableSumRound(2, [13.1667, 23.1666, 33.1667]), [13.17, 23.16, 33.17]);
  });
  it('Should round down closest value to hundreds', function () {
    assert.deepStrictEqual(stableSumRound(-2, [131667, 231666, 331667]), [131700, 231600, 331700]);
  });
  it('Should round down first value on ties', function () {
    assert.deepStrictEqual(stableSumRound(2, [13.1666, 13.1666, 13.1666]), [13.16, 13.17, 13.17]);
  });
});

describe('No Adjustments', function () {
  it('Round to whole numbers', function () {
    assert.deepStrictEqual(stableSumRound(0, [13, 23.25, 33.75]), [13, 23, 34]);
  });
  it('Round to two decimal places', function () {
    assert.deepStrictEqual(stableSumRound(2, [13.1111, 23.8888, 33]), [13.11, 23.89, 33]);
  });
  it('Round to hundreds place', function () {
    assert.deepStrictEqual(stableSumRound(-2, [1311.11, 2388.88, 3300]), [1300, 2400, 3300]);
  });
  it('Round a single value', function () {
    assert.deepStrictEqual(stableSumRound(0, [13.75]), [14]);
  });
});
