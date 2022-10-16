import { test, expect } from "@playwright/experimental-ct-react";
import { calcOneRepMaxWeight, calcOneRepMaxRatio } from "./calc-one-rep-max";

test.describe("Epley ratio formula", () => {
  type TestCase = [number, number]; // [input, expected]
  const cases: TestCase[] = [
    [1, 1],
    [2, 1 + 1 / 30],
    [3, 1 + 2 / 30],
    [4, 1.1],
    [5, 1 + 4 / 30],
    [6, 1 + 5 / 30],
    [7, 1.2],
    [8, 1 + 7 / 30],
    [9, 1 + 8 / 30],
    [10, 1.3],
    [11, 1 + 10 / 30],
    [12, 1 + 11 / 30],
    [13, 1.4],
    [14, 1 + 13 / 30],
    [15, 1 + 14 / 30],
    [16, 1.5],
    [17, 1 + 16 / 30],
    [18, 1 + 17 / 30],
    [19, 1.6],
    [20, 1 + 19 / 30],
  ]

  cases.forEach(([input, expected]) => {
    test(`Reps ${input} = x${expected}`, () => {
      const actual = calcOneRepMaxRatio(input);
      expect(actual).toEqual(expected);
    })
  })
})
test.describe("Epley 1RM formula", () => {

  type TestCase = [number, number, number]; // [weight, reps, expected]
  const cases: TestCase[] = [
    [1, 1, 1],
    // [1, 4, 1.1], // FIXME: issue with floating point math
    [1, 7, 1.2],
    [1, 10, 1.3],
    [1, 13, 1.4],
    [1, 16, 1.5],
    [100, 1, 100],
    // [100, 4, 110], // FIXME: issue with floating point math
    [100, 7, 120],
    [100, 10, 130],
    [100, 13, 140],
    [100, 16, 150],
  ]

  cases.forEach(([weight, reps, expected]) => {
    test(`${reps} x ${weight}[kg] = ${expected}[kg] 1RM`, () => {
      const actual = calcOneRepMaxWeight(weight, reps);
      expect(actual).toEqual(expected);
    })
  })
})
