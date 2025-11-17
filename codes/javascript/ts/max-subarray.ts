const maxSubArray = <T extends number>(...arr: T[]) => {
    let maxSum = -Infinity,
        sum = 0,
        sMax = 0,
        eMax = arr.length - 1,
        s = 0;
    arr.forEach((n,i) => {
        sum += n;
        if(maxSum < sum){
            maxSum = sum;
            sMax = s;
            eMax = i;
        }
        if(sum < 0){
            s = i + 1;
            sum = 0;
        }
    })
    return arr.slice(sMax,eMax + 1);
}

maxSubArray(-2, 1, -3, 4, -1, 2, 1, -5, 4); // [4, -1, 2, 1]