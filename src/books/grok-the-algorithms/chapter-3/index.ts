console.log("Chapter 3");

export const countDown = (n: number): any => {
    console.log(n);
    if (n <= 0) {
        return;
    }
    return countDown(n - 1);
};

console.log(countDown(3));
