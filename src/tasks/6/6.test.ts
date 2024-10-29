/**
 * Задача №6
 *  @description Тесты для задачи №6.
 *
 * - Аргументы
 * @param {number} year - Год
 * @returns {boolean}
 *
 * -- Результат
 * @example
 * isLeapYear(2020) // true
 * @example
 * isLeapYear(2000) // true
 * @example
 * isLeapYear(2100) // false
 */

import { isLeapYear } from "./6.decision";

interface IDataForTests {
    year: number;
    expected: boolean;
}

const dataForTests: IDataForTests[] = [
    { year: 2020, expected: true },
    { year: 2000, expected: true },
    { year: 2100, expected: false },
];

describe("isLeapYear", () => {
    dataForTests.forEach(({ year, expected }, index) => {
        test(`Проверка случая №${index + 1}`, () => {
            expect(isLeapYear(year)).toBe(expected);
        });
    });
});
