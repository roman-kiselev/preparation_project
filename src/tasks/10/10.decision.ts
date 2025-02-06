/**
 * Задача №10
 * @description Решение задачи №10.
 * @example
 * Код для решения задачи:
 */

export function isIsogram(str: string): boolean {
    if (str === "") return true;
    const lowerCaseStr = str.toLowerCase();
    const arr = new Set();
    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (arr.has(lowerCaseStr[i])) {
            return false;
        } else {
            arr.add(lowerCaseStr[i]);
        }
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics"));
