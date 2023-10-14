// 第一步拍平数组
type Flatten<T extends any[], S extends any[] = []> = T extends [
    infer F,
    ...infer R
]
    ? [F] extends [never]
    ? Flatten<R, S>
    : F extends any[]
    ? Flatten<R, [...S, ...Flatten<F>]>
    : Flatten<R, [...S, F]>
    : S;
// 规定数组项的类型
type CountKey = string | number | symbol;
// 返回属性值计算数组项出现的次数，数组项作为属性的对象
type Count<
    T extends any[],
    O extends Record<CountKey, any[]> = {}
> = T extends [infer F extends CountKey, ...infer R]
    ? F extends keyof O
    ? Count<R, Omit<O, F> & Record<F, [...O[F], 0]>>
    : Count<R, O & Record<F, [0]>>
    : {
        [P in keyof O]: O[P]['length'];
    };
// 结合以上2个类型即可实现该类型
type CountElementNumberToObject<T extends any[]> = Count<Flatten<T>>;

type CountElementNumberToObjectRes1 = CountElementNumberToObject<[1, 2, 3, 4, 5]>;
// {
//     1: 1
//     2: 1
//     3: 1
//     4: 1
//     5: 1
// }
type CountElementNumberToObjectRes2 = CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>;
//   {
//     1: 2
//     2: 2
//     3: 2
//     4: 1
//     5: 1
//   }
type CountElementNumberToObjectRes3 = CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]>;
//   {
//     1: 3
//     2: 3
//     3: 2
//     4: 3
//     5: 1
//   }
type CountElementNumberToObjectRes4 = CountElementNumberToObject<[never]> // {}
type CountElementNumberToObjectRes5 = CountElementNumberToObject<['1', '2', '0']>;
//   {
//     0: 1
//     1: 1
//     2: 1
//   }
type CountElementNumberToObjectRes6 = CountElementNumberToObject<['a', 'b', ['c', ['d']]]>;
// {
//     'a': 1
//     'b': 1
//     'c': 1
//     'd': 1
//   }