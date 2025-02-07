/**
 * Задача №12
 * @description Решение задачи №12.
 * @example
 * Код для решения задачи:
 */

export function inAscOrder(arr: number[]) {
    if (arr.length <= 1) {
        return true;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;
}

// Вариант с every
export function inAscOrderEvery(arr: number[]) {
    if (arr.length <= 1) {
        return true;
    }

    return arr.every((num, index) => {
        if (index === arr.length - 1) {
            return true;
        }

        return num <= arr[index + 1];
    });
}
