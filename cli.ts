#!/usr/bin/env ts-node

import fs from "fs";
import path from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

interface IArgs {
    _: string[];
    $0: string;
    type: string;
    name: string;
}
// npx my-cli generate tasks <name>
const argv = yargs(hideBin(process.argv))
    .command("generate <type> <name>", "Generate a new resource", (yargs) => {
        yargs.positional("type", {
            type: "string",
            describe: "Type of resource to generate",
        });
        yargs.positional("name", {
            type: "string",
            describe: "Name of resource to generate",
        });
    })
    .parseSync() as unknown as IArgs;

// Генерация файлов
async function generateFiles(type: string, name: string) {
    const templateDir = path.join("src", type);
    const dirPath = path.join(process.cwd(), templateDir, name);

    if (await fs.existsSync(dirPath)) {
        console.error(`Directory ${name} already exists!`);
        return;
    }

    await fs.mkdirSync(dirPath); // создаем папку

    const jsDocDecisionFilePath = `
/**
 * Задача №${name}
 * @description Решение задачи №${name}.
 * @example
 * Код для решения задачи:
 */
    `;
    const jsDocDescriptionFilePath = `
/**
 * Задача №${name}
 * @description Описание задачи №${name}.
 * -- Описание задачи --
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * - Аргументы
 * @param {any} input
 * @returns {any}
 * 
 * -- Результат
 * @example
 * result
 */`;

    const jsDocTestFilePath = `
/**
 * Задача №${name}
 *  @description Тесты для задачи №${name}.
 * 
 * 
 * @param {any} input
 * @returns {any}
 * 
 * -- Результат
 * @example
 * result
 * */`;

    // Создаем файлы
    const decisionFilePath = path.join(dirPath, `${name}.decision.ts`);
    const descriptionFilePath = path.join(dirPath, `${name}.description.ts`);
    const testFilePath = path.join(dirPath, `${name}.test.ts`);

    await fs.writeFileSync(decisionFilePath, jsDocDecisionFilePath);
    await fs.writeFileSync(descriptionFilePath, jsDocDescriptionFilePath);
    await fs.writeFileSync(testFilePath, jsDocTestFilePath);

    console.log(
        `Generated ${dirPath} with ${name}.decision.ts and description.ts`
    );
}

if (argv._[0] === "generate") {
    generateFiles(argv.type, argv.name).catch(console.error);
}
