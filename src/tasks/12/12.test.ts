/**
 * Задача №12
 *  @description Тесты для задачи №12.
 *
 *
 * @param {any} input
 * @returns {any}
 *
 * -- Результат
 * @example
 * result
 * */

import { inAscOrderEvery } from "./12.decision";

interface IDataTest {
    input: number[];
    expected: boolean;
}

const dataForTests: IDataTest[] = [
    {
        input: [1, 2, 4, 7, 19],
        expected: true,
    },
    {
        input: [1, 2, 3, 5, 4],
        expected: false,
    },
    {
        input: [1, 6, 10, 18, 2, 4, 20],
        expected: false,
    },
];

describe("inAscOrder", () => {
    dataForTests.forEach(({ expected, input }) => {
        test(`It should return ${expected}`, () => {
            expect(inAscOrderEvery(input)).toBe(expected);
        });
    });
});
