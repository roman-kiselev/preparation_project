/**
 * Задача №3
 * @description Решение задачи №3.
 * @example
 * Код для решения задачи:
 */

export function calculateCoins(amount: number) {
    const coins = {
        "1": 0,
        "2": 0,
        "5": 0,
        "10": 0,
    };

    while (amount > 0) {
        if (amount >= 10) {
            coins["10"]++;
            amount -= 10;
        } else if (amount >= 5) {
            coins["5"]++;
            amount -= 5;
        } else if (amount >= 2) {
            coins["2"]++;
            amount -= 2;
        } else {
            coins["1"]++;
            amount -= 1;
        }
    }
    const result = Object.entries(coins).filter(([, value]) => value > 0);
    const resultTwo = new Map(result).entries();
    return resultTwo;
}

console.log(calculateCoins(123));
