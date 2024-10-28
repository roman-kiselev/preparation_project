/**
 * Задача №2
 *  @description Тесты для задачи №2.
 *
 *
 * - Аргументы
 * @param {string} str1 - Строка 1
 * @param {string} str2 - Строка 2
 * @returns {number} - Расстояние Хэмминга
 *
 * -- Результат
 * @example
 * hammingDistance('Hello', 'Hallo') // 1
 * @example
 * hammingDistance('Расстояние', 'Хэмминга') // Строки должны быть одинаковой длины
 * @example
 * hammingDistance('1010', '1111') // 2
 */

import { hammingDistance } from "./2.decision";

interface IDataForTests {
    str1: string;
    str2: string;
    expected: number | string;
}

const dataForTests: IDataForTests[] = [
    { str1: "Hello", str2: "Hallo", expected: 1 },
    {
        str1: "Hello",
        str2: "Hallo2222",
        expected: "Строки должны быть одинаковой длины",
    },
    {
        str1: "Расстояние",
        str2: "Хэмминга",
        expected: "Строки должны быть одинаковой длины",
    },
    { str1: "1010", str2: "1111", expected: 2 },
];

describe("hammingDistance", () => {
    dataForTests.forEach(({ str1, str2, expected }, index) => {
        test(`Проверка случая ${index + 1}`, () => {
            expect(hammingDistance(str1, str2)).toBe(expected);
        });
    });
});
