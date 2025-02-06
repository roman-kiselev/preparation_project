export {};

// Просто узел
class Node<T> {
    constructor(public node: T, public next: Node<T> | null = null) {}
}

class LinkedList<T> {
    constructor(public top: Node<T> | null = null, private size: number = 0) {}

    getSize(): number {
        return this.size;
    }

    print() {
        let current = this.top;
        while (current) {
            console.log(current);
        }
    }

    // Добавление элемента в конец списка
    append(data: T): void {
        const newNode = new Node(data);
        if (!this.top) {
            this.top = newNode;
        } else {
            let current = this.top;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    prepend(data: T): void {
        const newNode = new Node(data);

        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }
}

const linkedList = new LinkedList<number>();

linkedList.append(10);
linkedList.append(20);
linkedList.prepend(40);
console.log(linkedList.getSize());
