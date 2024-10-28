/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"], // Поддержка файлов .test.ts и .spec.ts
};
