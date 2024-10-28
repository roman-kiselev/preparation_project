"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateBMI = calculateBMI;
exports.calculateBMITwo = calculateBMITwo;
exports.calculateBMIThree = calculateBMIThree;
function calculateBMI(weight, height) {
    var imt = function (weight, height) {
        return Number((weight / Math.pow((height / 100), 2)).toFixed(2));
    };
    var currentImt = imt(weight, height);
    if (currentImt < 18.5) {
        return [currentImt, "недостаток веса"];
    }
    else if (currentImt < 25) {
        return [currentImt, "нормальный вес"];
    }
    else if (currentImt < 30) {
        return [currentImt, "избыточный вес"];
    }
    else {
        return [currentImt, "ожирение"];
    }
}
// Упрощение логики с использованием объекта
function calculateBMITwo(weight, height) {
    var imt = weight / Math.pow((height / 100), 2);
    var roundedImt = Number(imt.toFixed(2));
    var categories = {
        underweight: "недостаток веса",
        normal: "нормальный вес",
        overweight: "избыточный вес",
        obesity: "ожирение",
    };
    var category = "";
    if (roundedImt < 18.5) {
        category = categories.underweight;
    }
    else if (roundedImt < 25) {
        category = categories.normal;
    }
    else if (roundedImt < 30) {
        category = categories.overweight;
    }
    else {
        category = categories.obesity;
    }
    return [roundedImt, category];
}
// Использование класса
var BMICalculator = /** @class */ (function () {
    function BMICalculator(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    BMICalculator.prototype.calculate = function () {
        return Number((this.weight / Math.pow((this.height / 100), 2)).toFixed(2));
    };
    BMICalculator.prototype.getBMI = function () {
        var currentImt = this.calculate();
        if (currentImt < 18.5) {
            return [currentImt, "недостаток веса"];
        }
        else if (currentImt < 25) {
            return [currentImt, "нормальный вес"];
        }
        else if (currentImt < 30) {
            return [currentImt, "избыточный вес"];
        }
        else {
            return [currentImt, "ожирение"];
        }
    };
    return BMICalculator;
}());
// Пример использования:
var bmiCalculator = new BMICalculator(70, 170);
var result = bmiCalculator.getBMI();
// Использование функции высшего порядка
function calculateBMIThree(weight, height, imtCalculator) {
    if (imtCalculator === void 0) { imtCalculator = function (w, h) {
        return w / Math.pow((h / 100), 2);
    }; }
    var currentImt = Number(imtCalculator(weight, height).toFixed(2));
    if (currentImt < 18.5) {
        return [currentImt, "недостаток веса"];
    }
    else if (currentImt < 25) {
        return [currentImt, "нормальный вес"];
    }
    else if (currentImt < 30) {
        return [currentImt, "избыточный вес"];
    }
    else {
        return [currentImt, "ожирение"];
    }
}
console.log(calculateBMI(70, 170));
console.log(calculateBMIThree(70, 170));
