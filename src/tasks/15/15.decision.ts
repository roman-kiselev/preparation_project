/**
 * Задача №15
 * @description Решение задачи №15.
 * @example
 * Код для решения задачи:
 */

export function number(arr: (number | string)[]): string[] | [] {
    if (arr.length === 0) {
        return [];
    }

    return arr.map((item, index) => `${index + 1}: ${item}`);
}

export function numberTwo(arr: (number | string)[]): string[] | [] {
    if (arr.length === 0) {
        return [];
    }

    const finishArr = [];
    for (let i = 0; i < arr.length; i++) {
        finishArr.push(`${i + 1}: ${arr[i]}`);
    }

    return finishArr;
}
