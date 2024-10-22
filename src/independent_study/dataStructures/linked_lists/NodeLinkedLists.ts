/**
 * Класс, описывающий узел связанного списка
 *
 * @class NodeLinkedList
 * @typedef {NodeLinkedList}
 * @template T
 */
export class NodeLinkedList<T> {
    data: T; // Данные, хранящиеся в узле
    next: NodeLinkedList<T> | null; // Ссылка на следующий узел

    constructor(data: T) {
        this.data = data;
        this.next = null; // Изначально следующий узел равен null
    }
}
