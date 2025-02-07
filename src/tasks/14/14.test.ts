/**
 * Задача №14
 *  @description Тесты для задачи №14.
 *
 *
 * @param {any} input
 * @returns {any}
 *
 * -- Результат
 * @example
 * result
 * */

import { IDataTest } from "..";
import { domainName } from "./14.decision";

const dataForTests: IDataTest<string, string>[] = [
    {
        input: "http://github.com/",
        expected: "github",
    },
    {
        input: "http://www.zombie-bites.com",
        expected: "zombie-bites",
    },
    {
        input: "https://www.cnet.com",
        expected: "cnet",
    },
    {
        input: "https://sub.domain.com/",
        expected: "sub",
    },
];

describe("domainName", () => {
    dataForTests.forEach(({ input, expected }) => {
        test(`It should return ${expected}`, () => {
            expect(domainName(input)).toBe(expected);
        });
    });
});
