/**
 * Задача №2
 * @description Решение задачи №2.
 * @example
 * Код для решения задачи:
 */

export function hammingDistance(str1: string, str2: string): number | string {
    if (str1.length !== str2.length) {
        return "Строки должны быть одинаковой длины";
    }
    let count = 0;
    const arrStr1 = Array.from(str1);
    const arrStr2 = Array.from(str2);
    for (let i = 0; i < arrStr2.length; i++) {
        if (arrStr2[i] !== arrStr1[i]) {
            count++;
        }
    }

    return count;
}
