/**
 * Задача №11
 *  @description Тесты для задачи №11.
 *
 *
 * @param {any} input
 * @returns {any}
 *
 * -- Результат
 * @example
 * result
 * */

import { arrT, moveZerosTwo } from "./11.decision";

interface IDataTest {
    input: arrT;
    expected: arrT;
}

const dataForTests: IDataTest[] = [
    { input: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
    { input: [0, 0, 0, 0, 0], expected: [0, 0, 0, 0, 0] },
    {
        input: [false, 1, 0, 1, 2, 0, 1, 3, "a"],
        expected: [false, 1, 1, 2, 1, 3, "a", 0, 0],
    },
];

describe("moveZeros", () => {
    dataForTests.forEach(({ input, expected }) => {
        test(`It should return ${expected}`, () => {
            expect(moveZerosTwo(input)).toEqual(expected);
        });
    });
});
