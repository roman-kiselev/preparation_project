import { NodeLinkedList } from "./NodeLinkedLists";

class LinkedList<T> {
    head: NodeLinkedList<T> | null; // Начало списка

    constructor() {
        this.head = null; // Изначально список пуст
    }

    /**
     * Добавление элемента в конец списка
     *
     * @param {T} data
     * @return {void}
     */
    append(data: T): void {
        const newNode = new NodeLinkedList(data);
        if (!this.head) {
            this.head = newNode; // Если список пуст, новый узел становится головой
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next; // Перемещаемся до последнего узла
        }

        current.next = newNode;
    }

    /**
     * Вывод списка
     *
     * @return {string}
     */
    toString(): string {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + ",";
            current = current.next;
        }
        return result;
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
