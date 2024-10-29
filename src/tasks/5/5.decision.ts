/**
 * Задача №5
 * @description Решение задачи №5.
 * @example
 * Код для решения задачи:
 * - Возвращаем если остаётся один символ
 * - Задача определить все нечётные символы в строке
 * - Удалить их
 * - Вызвать снова с новой строкой
 * Один тест не пройден
 */

export function oddElimination(str: string): string {
    if (str.length === 1) {
        return str;
    }
    let strArr = Array.from(str);

    for (let i = 0; i < strArr.length; i += 2) {
        strArr.splice(i, 1);
    }
    return oddElimination(strArr.join(""));
}
