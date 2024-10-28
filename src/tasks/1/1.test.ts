import { calculateBMI, calculateBMIThree, calculateBMITwo } from "./1.decision";
interface IDataForTests {
    weight: number;
    height: number;
    expected: [number, string];
}

const dataForTests: IDataForTests[] = [
    {
        weight: 70,
        height: 170,
        expected: [24.22, "нормальный вес"],
    },
    { weight: 30, height: 150, expected: [13.33, "недостаток веса"] },
    { weight: 90, height: 180, expected: [27.78, "избыточный вес"] },
    { weight: 100, height: 180, expected: [30.86, "ожирение"] },
];

describe("calculateBMI", () => {
    dataForTests.forEach(({ weight, height, expected }) => {
        test(`1.должен вернуть [${expected[0]}, "${expected[1]}"]`, () => {
            const result = calculateBMI(weight, height);
            expect(result[0]).toBeCloseTo(expected[0], 2);
            expect(result[1]).toBe(expected[1]);
        });

        test(`2.должен вернуть [${expected[0]}, "${expected[1]}"]`, () => {
            const result = calculateBMITwo(weight, height);
            expect(result[0]).toBeCloseTo(expected[0], 2);
            expect(result[1]).toBe(expected[1]);
        });

        test(`3.должен вернуть [${expected[0]}, "${expected[1]}"]`, () => {
            const result = calculateBMIThree(weight, height);
            expect(result[0]).toBeCloseTo(expected[0], 2);
            expect(result[1]).toBe(expected[1]);
        });
    });
});
