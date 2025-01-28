/**
 * Задача №7
 *  @description Тесты для задачи №7.
 *
 *
 * @param {number[]} input
 * @returns {number[]}
 *
 * -- Результат
 * @example
 * result
 * */

import { squareOrSquareRoot } from "./7.decision";

interface IDataForTest {
    numbers: number[];
    expected: number[];
}

const dataForTests: IDataForTest[] = [
    {
        numbers: [4, 3, 9, 7, 2, 1],
        expected: [2, 9, 3, 49, 4, 1],
    },
];

describe("squareOrSquareRoot", () => {
    dataForTests.forEach(({ numbers, expected }) => {
        test(`Полный квадрат или корень ${expected}`, () => {
            expect(squareOrSquareRoot(numbers)).toEqual(expected);
        });
    });
});
