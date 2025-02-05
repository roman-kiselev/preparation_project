// Начало для связного списка
class LinkedList {
    constructor(public value: number, public next: LinkedList | null = null) {}

    iterate(top: LinkedList | null = null): void {
        while (top != null) {
            console.log(top.value);
            top = top.next;
        }
    }

    findCell(top: LinkedList | null, target: number): LinkedList | null {
        while (top != null) {
            if (top.value === target) {
                return top;
            }
            top = top.next;
        }

        return null;
    }

    // Без ограничителей
    findCellBeforeTest(top: LinkedList, target: number): LinkedList | null {
        if (top === null) return null;

        while (top.next !== null) {
            if (top.next.value === target) {
                return top;
            }

            top = top.next;
        }

        return null;
    }

    findCellBefore(top: LinkedList, target: number): LinkedList | null {
        while (top.next !== null) {
            if (top.next.value === target) {
                return top;
            }

            top = top.next;
        }

        return null;
    }
}
