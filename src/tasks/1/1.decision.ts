export function calculateBMI(weight: number, height: number): [number, string] {
    const imt = (weight: number, height: number) =>
        Number((weight / (height / 100) ** 2).toFixed(2));
    const currentImt = imt(weight, height);
    if (currentImt < 18.5) {
        return [currentImt, "недостаток веса"];
    } else if (currentImt < 25) {
        return [currentImt, "нормальный вес"];
    } else if (currentImt < 30) {
        return [currentImt, "избыточный вес"];
    } else {
        return [currentImt, "ожирение"];
    }
}

// Упрощение логики с использованием объекта
export function calculateBMITwo(
    weight: number,
    height: number
): [number, string] {
    const imt = weight / (height / 100) ** 2;
    const roundedImt = Number(imt.toFixed(2));

    const categories: { [key: string]: string } = {
        underweight: "недостаток веса",
        normal: "нормальный вес",
        overweight: "избыточный вес",
        obesity: "ожирение",
    };

    let category = "";

    if (roundedImt < 18.5) {
        category = categories.underweight;
    } else if (roundedImt < 25) {
        category = categories.normal;
    } else if (roundedImt < 30) {
        category = categories.overweight;
    } else {
        category = categories.obesity;
    }

    return [roundedImt, category];
}

// Использование класса

class BMICalculator {
    private weight: number;
    private height: number;

    constructor(weight: number, height: number) {
        this.weight = weight;
        this.height = height;
    }

    private calculate(): number {
        return Number((this.weight / (this.height / 100) ** 2).toFixed(2));
    }

    public getBMI(): [number, string] {
        const currentImt = this.calculate();
        if (currentImt < 18.5) {
            return [currentImt, "недостаток веса"];
        } else if (currentImt < 25) {
            return [currentImt, "нормальный вес"];
        } else if (currentImt < 30) {
            return [currentImt, "избыточный вес"];
        } else {
            return [currentImt, "ожирение"];
        }
    }
}

// Пример использования:
const bmiCalculator = new BMICalculator(70, 170);
const result = bmiCalculator.getBMI();

// Использование функции высшего порядка
export function calculateBMIThree(
    weight: number,
    height: number,
    imtCalculator: (weight: number, height: number) => number = (w, h) =>
        w / (h / 100) ** 2
): [number, string] {
    const currentImt = Number(imtCalculator(weight, height).toFixed(2));

    if (currentImt < 18.5) {
        return [currentImt, "недостаток веса"];
    } else if (currentImt < 25) {
        return [currentImt, "нормальный вес"];
    } else if (currentImt < 30) {
        return [currentImt, "избыточный вес"];
    } else {
        return [currentImt, "ожирение"];
    }
}
console.log(calculateBMI(70, 170));
console.log(calculateBMITwo(70, 170));
console.log(calculateBMIThree(70, 170));
