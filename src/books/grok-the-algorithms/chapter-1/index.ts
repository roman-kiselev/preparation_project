// Бинарный поиск
// Важно что бы массив был отсортирован

type BinarySearch<T = any, K = any> = (list: T, item: K) => K | null;

export const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const binarySearch: BinarySearch<number[], number> = (list, item) => {
    let min = 0;
    let max = list.length - 1;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        console.log(list[mid]); // 5
        if (list[mid] === item) {
            return list[mid];
        }
        if (list[mid] > item) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return null;
};
