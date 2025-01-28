/**
 * Задача №9
 * @description Решение задачи №9.
 * @example
 * Код для решения задачи:
 */

type highAndLow = (str: string) => string;

// С приминением встроенных методов
export const highAndLow: highAndLow = (str) => {
    const strArr = str.split(" ").map(Number);

    return `${Math.max(...strArr)} ${Math.min(...strArr)}`;
};

// Без встроенных методов

class Str {
    constructor(private readonly str: string) {}

    splitStrBySpace(separator: string = " ") {
        const arrStr: (number | string)[] = [];
        let partStr = "";

        return {
            getString: () => {
                for (let i = 0; i < this.str.length; i++) {
                    if (this.str[i] !== separator) {
                        partStr = partStr + this.str[i];
                    } else if (this.str[i] === separator) {
                        arrStr.push(partStr);
                        partStr = "";
                    }
                    if (i === this.str.length - 1) {
                        arrStr.push(partStr);
                        partStr = "";
                    }
                }

                return arrStr;
            },
            getNumber: () => {
                for (let i = 0; i < this.str.length; i++) {
                    if (this.str[i] !== " ") {
                        partStr = partStr + this.str[i];
                    } else if (this.str[i] === " ") {
                        arrStr.push(Number(partStr));
                        partStr = "";
                    }
                    if (i === this.str.length - 1) {
                        arrStr.push(Number(partStr));
                        partStr = "";
                    }
                }

                return arrStr;
            },
        };
    }
}

const strTwo = new Str("1/2 -3 4 5").splitStrBySpace("/").getString();
console.log(strTwo);
