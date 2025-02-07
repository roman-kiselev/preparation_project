/**
 * Задача №13
 * @description Решение задачи №13.
 * @example
 * Код для решения задачи:
 */

export function squareSum(arr: number[]): number {
    let newArr = [];

    for (const item of arr) {
        newArr.push(item ** 2);
    }

    return newArr.reduce((current, acc) => current + acc, 0);
}

export function squareSumTwo(arr: number[]): number {
    if (arr.length <= 0) {
        return 0;
    }
    let sum = 0;
    const [first, ...main] = arr;

    sum += first ** 2;
    sum += squareSumTwo(main);

    return sum;
}

export function squareSumThree(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i] ** 2;
    }

    return sum;
}
