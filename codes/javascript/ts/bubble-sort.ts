const bubbleSort = <T>(arr:T[]) => {
    let swapped = false;
    let a = [...arr];
    for (let i = 0; i < a.length; i++) {
        swapped = false;
        for (let j = 0; j < a.length - i; j++) {
            if (a[j + 1] < a[j]) {
                //数组解构的方式
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            return a;
        }
    }
    return a;
};

bubbleSort([2, 1, 4, 3]); // [1, 2, 3, 4]