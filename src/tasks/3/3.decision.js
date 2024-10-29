"use strict";
/**
 * Задача №3
 * @description Решение задачи №3.
 * @example
 * Код для решения задачи:
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCoins = calculateCoins;
function calculateCoins(amount) {
    var coins = {
        "1": 0,
        "2": 0,
        "5": 0,
        "10": 0,
    };
    while (amount > 0) {
        if (amount >= 10) {
            coins["10"]++;
            amount -= 10;
        }
        else if (amount >= 5) {
            coins["5"]++;
            amount -= 5;
        }
        else if (amount >= 2) {
            coins["2"]++;
            amount -= 2;
        }
        else {
            coins["1"]++;
            amount -= 1;
        }
    }
    var result = Object.entries(coins)
        .filter(function (_a) {
        var value = _a[1];
        return value > 0;
    })
        .map(function (_a) {
        var _b;
        var key = _a[0], value = _a[1];
        return _b = {}, _b["".concat(key)] = value, _b;
    });
    return Object.assign.apply(Object, __spreadArray([{}], result, false));
}
console.log(calculateCoins(123));
