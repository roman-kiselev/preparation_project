/**
 * Задача №15
 *  @description Тесты для задачи №15.
 *
 *
 * @param {any} input
 * @returns {any}
 *
 * -- Результат
 * @example
 * result
 * */

import { number } from "./15.decision";

interface IDataTest {
    input: (number | string)[];
    expected: (number | string)[];
}

const dataForTests: IDataTest[] = [
    {
        input: [],
        expected: [],
    },
    {
        input: ["a", "b", "c"],
        expected: ["1: a", "2: b", "3: c"],
    },
];

describe("number", () => {
    dataForTests.forEach(({ expected, input }) => {
        test(`It should return ${expected}`, () => {
            expect(number(input)).toEqual(expected);
        });
    });
});
