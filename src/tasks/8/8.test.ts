/**
 * Задача №8
 *  @description Тесты для задачи №8.
 *
 *
 * @param {any} input
 * @returns {any}
 *
 * -- Результат
 * @example
 * result
 * */

import { removeEverySecondOne } from "./8.decision";

type DelTest = number[] | string[];

interface ITestCase {
    input: DelTest;
    expected: DelTest;
}

const testCases: ITestCase[] = [
    {
        input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        expected: [1, 3, 5, 7, 9],
    },
    {
        input: ["Оставить", "Убрать", "Оставить", "Убрать", "Оставить"],
        expected: ["Оставить", "Оставить", "Оставить"],
    },
];

describe("removeEverySecondOne", () => {
    testCases.forEach(({ input, expected }) => {
        test(`should remove every second element from [${input}]`, () => {
            expect(removeEverySecondOne({ arr: input })).toEqual(expected);
        });
    });

    test("should return empty array for empty input", () => {
        expect(removeEverySecondOne({ arr: [] })).toEqual([]);
    });

    test("should return single element array", () => {
        expect(removeEverySecondOne({ arr: [42] })).toEqual([42]);
    });
});
