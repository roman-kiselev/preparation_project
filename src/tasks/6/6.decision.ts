/**
 * Задача №6
 * @description Решение задачи №6.
 * @example
 * Код для решения задачи:
 * - Вероятно должен быть запущен цикл
 * - Должна быть переменная которая подсчитывает високосный день
 * - Если она равна 24 то год високосный
 */

export function isLeapYear(year: number): boolean {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}
