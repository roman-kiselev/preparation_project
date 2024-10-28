/**
 * Задача №3
 *  @description Тесты для задачи №3.
 *  -- Описание задачи --
 * Минимальное количество монет
 *
 *
 * - Аргументы
 * @param {number} amount - Сумма денег
 * @returns {{string: number}} - {"Номинал": количество}
 *
 * -- Результат
 * @example
 * calculateCoins(123) // {'1': 1, '2': 1, '10': 12}
 * @example
 * calculateCoins(184) // {'2': 2, '10': 18}
 * @example
 * calculateCoins(111) // {'1': 1, '10': 11}
 */

import { calculateCoins } from "./3.decision";

interface IDataForTest {
    amount: number;
    expected: { [key: string]: number };
}

const dataForTests: IDataForTest[] = [
    { amount: 123, expected: { "1": 1, "2": 1, "10": 12 } },
    { amount: 184, expected: { "2": 2, "10": 18 } },
    { amount: 111, expected: { "1": 1, "10": 11 } },
];

describe("Минимальное количество монет", () => {
    dataForTests.forEach(({ amount, expected }) => {
        test(`amount = ${amount}`, () => {
            expect(calculateCoins(amount)).toEqual(expected);
        });
    });
});
