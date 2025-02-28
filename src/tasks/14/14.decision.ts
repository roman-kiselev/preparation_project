/**
 * Задача №14
 * @description Решение задачи №14.
 * @example
 * Код для решения задачи:
 */

export function domainName(url: string): string {
    // 1. Удаляем протокол (http://, https://) и www.
    let domain = url.replace(/(https?:\/\/)|(www\.)/gi, "");

    // 2. Находим индекс первой косой черты (/) или точкки (.)
    let endIndex = domain.indexOf(".");

    // 3. Если не найдено ни одного, ни другого, то возвращаем все как доменное имя
    if (endIndex === -1) {
        return domain;
    }

    // 4. Извлекаем доменное имя до косой черты или точки
    domain = domain.substring(0, endIndex);

    return domain;
}
