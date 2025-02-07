/**
 * Задача №11
 * @description Решение задачи №11.
 * @example
 * Код для решения задачи:
 */

export type arrT = (number | boolean | string)[];

// Короткая запись. Сложность O(2n)
export function moveZerosTwo(arr: arrT): arrT {
    return arr
        .filter((item) => item !== 0)
        .concat(arr.filter((item) => item === 0));
}

// Эффективный способ, так как выполняется за один проход
// При этом длинна масива не меняется, не создаётся новый массив
// О(n)
export function moveZerosThree(arr: arrT): arrT {
    let helpIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[helpIndex]] = [arr[helpIndex], arr[i]];
            helpIndex++;
        }
    }

    return arr;
}
