/**
 * Задача №7
 * @description Решение задачи №7.
 * @example
 * Код для решения задачи:
 */

const checkSquare = (num: number) => {
    const newNum = Math.round(Math.sqrt(num)) ** 2;
    if (num === newNum) {
        return true;
    } else {
        false;
    }
};

export function squareOrSquareRoot(numbers: number[]): number[] {
    const newArr = numbers.map((item) => {
        if (checkSquare(item)) {
            return Math.sqrt(item);
        } else {
            return Math.pow(item, 2);
        }
    });

    return newArr;
}
