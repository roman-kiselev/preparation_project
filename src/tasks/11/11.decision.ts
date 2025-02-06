/**
 * Задача №11
 * @description Решение задачи №11.
 * @example
 * Код для решения задачи:
 */

type arrT = (number | boolean | string)[];

export function moveZeros(arr: arrT): arrT {
    let min = 0;
    let max = arr.length - 1;
    let mid = Math.floor(max / 2);
}
