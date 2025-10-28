const linearSearch = <T>(arr:T[],item:T) => {
    for(let i = 0;i < arr.length;i++){
        if(arr[i] === item){
          return i;
        }
    }
    return -1;
}

linearSearch([2, 9, 9], 9); // 1
linearSearch([2, 9, 9], 7); // -1