StableSumRound [![Build Status](https://travis-ci.org/ChristopherMeyers/StableSumRound.png?branch=master)](https://travis-ci.org/ChristopherMeyers/StableSumRound)
============

The stable sum rounder is a function that takes in a set of values to be rounded, and rounds them in a way to ensure the sum of the rounded numbers is stable after they have been individually rounded. A common use case is when rounding percentages, you can ensure that the total remains stable at 100% (see the example below).

|           | Standard Rounding | StableSum |
| --------- | ----------------- | --------- |
|           | 33.33%            | 33.34%    |
|           | 33.33%            | 33.33%    |
|           | 33.33%            | 33.33%    |
| **Total** | 99.99%            | 100%      |

```js
stableSumRound(2, [33.3333, 33.3333, 33.3333]);
//returns [33.34, 33.33, 33.33]
stableSumRound(0, [1.5, 1.5, 1.5, 1.5]);
//returns [1, 2, 1, 2]
```
