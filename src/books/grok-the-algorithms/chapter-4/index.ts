export const findSmallest = (arr: number[]) => {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return [smallestIndex, smallest];
};

export const selectionSort = (arr: number[]) => {
    let arrCopy = [...arr];
    let newArr = [];
    while (arrCopy.length !== 0) {
        let smallest = findSmallest(arrCopy);
        newArr.push(smallest[1]);
        arrCopy.splice(smallest[0], 1);
    }
    return newArr;
};

// Плохой варинт
export const sum = (arr: number[]): any => {
    if (arr.length <= 0) return 0;
    return arr.shift() + sum(arr);
};

// console.log(sum([1, 2, 3]));

// Чуть лучше предыдущего
export const sumTwo = (arr: number[]): number => {
    if (arr.length === 0) return 0;

    const [first, ...rest] = arr;

    return first + sum(rest);
};

// console.log(sumTwo([1, 2, 3])); // Выведет 6

// Вариант
export const sumThree = (arr: number[]): number => {
    if (arr.length === 0) return 0;

    return arr[0] + sumThree(arr.splice(1));
};

// console.log(sumThree([1, 2, 3])); // Выведет 6

// Лучший варинт, вариант и индексом
export const sumFour = (arr: number[], index: number = 0): number => {
    if (index >= arr.length) return 0;

    return arr[index] + sumFour(arr, index + 1);
};
// console.log(sumFour([1, 2, 3]));

// Подсчёт элементов в списке
const lenghtArr = (arr: any[], index: number = 0): number => {
    if (index >= arr.length) {
        return 0;
    }
    return 1 + lenghtArr(arr, ++index);
};

// console.log(lenghtArr([1, 2, 3]));

// Наибольшее число в списке

const getMaxNumber = (arr: number[]): any => {
    let currentIndex = 0;
    let max = 0;

    return function findNextMax() {
        if (currentIndex >= arr.length) {
            return max;
        }

        if (arr[currentIndex] > max) {
            max = arr[currentIndex];
        }

        currentIndex++;
        return findNextMax();
    };
};

const maxIndex = getMaxNumber([1, 2, 10, 12, 101]);

// Бинарный поиск
// Базовый
const searchBinary = (arr: number[], item: number): number | null => {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        if (arr[mid] === item) {
            return arr[mid];
        }
        if (arr[mid] > item) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return null;
};

// Рекурсия
const searchBinaryRecurs = (arr: number[], item: number) => {
    let min = 0;
    let max = arr.length - 1;

    return function findItem(index: number = 0) {
        const mid = Math.floor((min + max) / 2);
        if (arr[mid] === item) {
            return arr[mid];
        }

        if (min <= max) {
            if (arr[mid] > item) {
                max = mid - 1;
            } else {
                min = mid + 1;
            }
            return findItem(index + 1);
        }

        return null;
    };
};

const findedItem = searchBinaryRecurs([1, 2, 10, 12, 101], 101);
// console.log(findedItem());

type FilterAny<T = any> = (arr: T, index: number) => T;

const lessNumber: FilterAny<number[]> = (arr, index) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < index) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
};

const moreNumber: FilterAny<number[]> = (arr, index) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > index) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
};

const quickSort = (arr: number[]): number[] => {
    if (arr.length < 2) {
        return arr;
    } else {
        let pivot = arr[0];
        let less = lessNumber(arr, pivot);
        let greater = moreNumber(arr, pivot);

        return [...quickSort(less), pivot, ...quickSort(greater)];
    }
};
console.log(quickSort([2, 101, 10, 12, 3, 1]));
