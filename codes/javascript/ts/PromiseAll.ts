const myPromiseAll = <T extends readonly unknown[] | []>(promiseList: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }>  => {
    return new Promise((resolve,reject) => {
        if(!Array.isArray(promiseList)){
            return reject('arguments must be an array!');
        }
        let count = 0,resolveValues: any= [];
        const len = promiseList.length;
        for(let i = 0;i < len;i++){
            Promise.resolve(promiseList[i]).then(val => {
                count++;
                resolveValues[i] = val;
                if(count === len){
                    resolve(resolveValues);
                }
            }).catch(err => {
                reject(err);
            })
        }
    })
}

const promise1 = new Promise<number>(resolve => resolve(1));
const promise2 = new Promise<number>(resolve => resolve(2));
const promise3 = new Promise<number>(resolve => resolve(3));
const promiseList = [promise1, promise2, promise3];
const promiseAll = myPromiseAll(promiseList);
promiseAll.then(function (res) {
  console.log(res);
}); // [1,2,3]