/**
 * Задача №8
 * @description Решение задачи №8.
 * Удаление элементов
 *
 *
 * @example
 * Код для решения задачи:
 */

interface IArr {
    arr: number[] | string[];
}

export function removeEverySecondOne({ arr }: IArr) {
    const newData = [];
    if (arr.length === 1) {
        return arr;
    }

    for (let i = 0; i < arr.length; i++) {
        if (!(i % 2)) {
            newData.push(arr[i]);
        }
    }

    return newData;
}
