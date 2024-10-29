/**
 * Задача №5
 *  @description Тесты для задачи №5.
 *  * Нечетный отсев
 *
 * - Аргументы
 * @param {string} str - Строка
 * @returns {string}
 *
 * -- Результат
 * @example
 * oddElimination('abcdef') // d
 * @example
 * oddElimination('hello world') // o
 * @example
 * oddElimination('123456789) // 8
 */

import { oddElimination } from "./5.decision";

interface IDataForTests {
    str: string;
    expected: string;
}

const dataForTests: IDataForTests[] = [
    { str: "abcdef", expected: "d" },
    { str: "hello world", expected: "o" },
    { str: "123456789", expected: "8" },
];

describe("oddElimination", () => {
    dataForTests.forEach(({ str, expected }, index) => {
        test(`Проверка случая №${index + 1}`, () => {
            expect(oddElimination(str)).toBe(expected);
        });
    });
});
