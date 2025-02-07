/**
 * Задача №13
 *  @description Тесты для задачи №13.
 *
 *
 * @param {any} input
 * @returns {any}
 *
 * -- Результат
 * @example
 * result
 * */

import { IDataTest } from "..";
import { squareSumThree } from "./13.decision";

const dataForTests: IDataTest<number[], number>[] = [
    {
        input: [1, 2, 2],
        expected: 9,
    },
    {
        input: [3, 3],
        expected: 18,
    },
];

describe("squareSum", () => {
    dataForTests.forEach(({ expected, input }) => {
        test(`It should return ${expected}`, () => {
            expect(squareSumThree(input)).toBe(expected);
        });
    });
});
