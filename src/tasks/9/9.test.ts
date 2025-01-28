/**
 * Задача №9
 *  @description Тесты для задачи №9.
 *
 *
 * @param {any} input
 * @returns {any}
 *
 * -- Результат
 * @example
 * result
 * */

import { highAndLow } from "./9.decision";

interface IDataTest {
    input: string;
    expected: string;
}

const dataForTests: IDataTest[] = [
    { input: "1 2 3 4 5", expected: "5 1" },
    { input: "1 2 -3 4 5", expected: "5 -3" },
];

describe("highAndLow", () => {
    dataForTests.forEach(({ input, expected }) => {
        test("It should return minimum and maximum number", () => {
            expect(highAndLow(input)).toBe(expected);
        });
    });
});
