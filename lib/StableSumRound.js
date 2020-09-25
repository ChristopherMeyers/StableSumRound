function stableSumRound(precision, values) {
  const decimalPlace = (p) => 10 ** (-1 * p);

  function round(p, v) {
    const size = 10 ** p;
    return Math.round(v * size) / size;
  }

  const decimal = decimalPlace(precision);
  const sum = Math.round(values.reduce((a, b) => a + b) / decimal) * decimal;
  const valuesToAdjust = values.map((v, i) => { return { original: v, i: i, rounded: round(precision, v) } })
    .map(v => { return { ...v, diff: v.original - v.rounded } });
  const roundedSum = valuesToAdjust.reduce((a, b) => a + b.rounded, 0);
  var adjustmentCount = Math.abs(Math.round((roundedSum - sum) / decimal));
  var gt = roundedSum > sum;
  var adjustmentAmount = gt ? decimal * -1 : decimal;
  const sorted = valuesToAdjust.sort(function(a, b) {
    if (a.diff === b.diff)
      return 0;
    const cmpr = gt ? a.diff > b.diff : b.diff > a.diff;
    return cmpr ? 1 : -1;
  });

  const adjustedValues = sorted.map(function(v, i) {
    return{ i: v.i, rounded: i < adjustmentCount ? v.rounded + adjustmentAmount : v.rounded }
  });
  const finalValues = adjustedValues
    .sort(function(a, b) { return a.i > b.i ? 1 : -1; })
    .map(function(v) { return round(precision, v.rounded) });
  return finalValues;
}

//https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  return stableSumRound;
}));
