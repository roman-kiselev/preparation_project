/**
 * Задача №4
 * @description Решение задачи №4.
 * @example
 * Код для решения задачи:
 */

export function frequentSymbol(text: string): string {
    const textArr = Array.from(text);
    let letter: { [key: string]: number } = {};
    for (let i = 0; i < textArr.length; i++) {
        if (letter[textArr[i]]) {
            letter[textArr[i]]++;
        } else {
            letter[textArr[i]] = 1;
        }
    }
    const sortLetter = Object.entries(letter).sort(
        ([, valueA], [, valueB]) => valueB - valueA
    );

    if (sortLetter[0][1] !== sortLetter[1][1]) {
        return sortLetter[0][0];
    } else {
        const indexNull = textArr.findIndex((str) => str === sortLetter[0][0]);
        const indexOne = textArr.findIndex((str) => str === sortLetter[1][0]);
        return indexNull < indexOne ? sortLetter[0][0] : sortLetter[1][0];
    }
}
