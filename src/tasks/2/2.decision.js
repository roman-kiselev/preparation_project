"use strict";
/**
 * Задача №2
 * @description Решение задачи №2.
 * @example
 * Код для решения задачи:
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hammingDistance = hammingDistance;
function hammingDistance(str1, str2) {
    if (str1.length !== str2.length) {
        return "Строки должны быть одинаковой длины";
    }
    var count = 0;
    var arrStr1 = Array.from(str1);
    var arrStr2 = Array.from(str2);
    for (var i = 0; i < arrStr2.length; i++) {
        if (arrStr2[i] !== arrStr1[i]) {
            count++;
        }
    }
    return count;
}
