"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var _2_decision_1 = require("./2.decision");
var dataForTests = [
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
describe("hammingDistance", function () {
    dataForTests.forEach(function (_a, index) {
        var str1 = _a.str1, str2 = _a.str2, expected = _a.expected;
        test("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0441\u043B\u0443\u0447\u0430\u044F ".concat(index + 1), function () {
            expect((0, _2_decision_1.hammingDistance)(str1, str2)).toBe(expected);
        });
    });
});
