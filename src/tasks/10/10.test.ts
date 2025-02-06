/**
 * Задача №10
 *  @description Тесты для задачи №10.
 *
 *
 * @param {any} input
 * @returns {any}
 *
 * -- Результат
 * @example
 * result
 * */

import { isIsogram } from "./10.decision";

interface IDataTest {
    input: string;
    expected: boolean;
}

const dataForTests: IDataTest[] = [
    { input: "Dermatoglyphics", expected: true },
    { input: "aba", expected: false },
    { input: "moOse", expected: false },
];

describe("isIsogram", () => {
    dataForTests.forEach(({ input, expected }) => {
        test(`It should return ${expected}`, () => {
            expect(isIsogram(input)).toBe(expected);
        });
    });
});
