/**
 * Задача №4
 *  @description Тесты для задачи №4.
 *  Частый символ
 *
 * - Аргументы
 * @param {string} text - Текст
 * @returns {string}
 *
 * -- Результат
 * @example
 * frequentSymbol('tic tac') // t
 * @example
 * frequentSymbol('Show Shawn Sharons shabby shoes') // h
 * @example
 * frequentSymbol('hello world') // l
 */

import { frequentSymbol } from "./4.decision";

interface IDataForTest {
    text: string;
    expected: string;
}

const dataForTests: IDataForTest[] = [
    { text: "tic tac", expected: "t" },
    { text: "Show Shawn Sharons shabby shoes", expected: "h" },
    { text: "hello world", expected: "l" },
];

describe("frequentSymbol", () => {
    dataForTests.forEach(({ text, expected }) => {
        test(`Частый символ - ${expected}`, () => {
            expect(frequentSymbol(text)).toBe(expected);
        });
    });
});
