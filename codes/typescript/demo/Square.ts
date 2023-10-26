
//---------------------------------- large number version ----------------------------------
// namespace multiply {
//   /**0~9 */
//   type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
//   /**个位 RRRF ==> F */
//   type DigitFirst<T extends string | number | bigint> = T extends string ?
//     (Number<T> extends Digit ?
//       Number<T> :
//       (T extends `${number}${infer R}` ? DigitFirst<R> : never)) :
//     DigitFirst<`${T}`>;
//   /**个位以上 RRRF ==> RRR */
//   type DigitRest<T extends string | number | bigint, _Result extends string = ``> = T extends string ?
//     (T extends `${infer F}${infer R extends `${any}${any}`}` ?
//       DigitRest<R, `${_Result}${F}`> :
//       Number<_Result> extends 0/*去0*/ ? `` : _Result) :
//     DigitRest<`${T}`>;
//   type MakeCounter<T extends number, _Result extends 1[] = []> = _Result[`length`] extends T ? _Result : MakeCounter<T, [..._Result, 1]>;
//   /**个位相加 */
//   type DigitAdd<X extends Digit, Y extends Digit> = [...MakeCounter<X>, ...MakeCounter<Y>][`length`] extends (infer N extends number) ? N : 0;
//   /**Parse Int */
//   type Number<T extends string | number | bigint> = T extends `0${infer R}`/*去0*/ ? Number<R> : T extends `${infer N extends number | bigint}` ? N : 0;
//   /**+1（进位） */
//   type AddOne<T extends number | string, _DigitAdd extends number = DigitAdd<DigitFirst<T>, 1>> = `${_DigitAdd extends Digit ? DigitRest<T> : /*进位*/AddOne<DigitRest<T>>}${DigitFirst<_DigitAdd>}`;
//   /**个位乘 */
//   type DigitMultiply<T extends string | number | bigint, U extends Digit, _Counter extends 1[] = [], _Result extends string = `0`> = _Counter[`length`] extends U ? _Result : DigitMultiply<T, U, [..._Counter, 1], Sum<_Result, T>>;
//   /**x10^n */
//   type TenPow<T extends string | number | bigint, N extends number, _Counter extends 1[] = []> = _Counter[`length`] extends N ? T : `${TenPow<T, N, [..._Counter, 1]>}0`;

//   /**加法器（自然数） */
//   type Sum<A extends string | number | bigint, B extends string | number | bigint, _Result extends string = ``, _DigitAdd extends number = DigitAdd<DigitFirst<A>, DigitFirst<B>>> =
//     `${A}${B}` extends `` ? _Result :    //return
//     Sum<DigitRest<A>, _DigitAdd extends Digit ? DigitRest<B> : /*进位*/AddOne<DigitRest<B>>, `${DigitFirst<_DigitAdd>}${_Result}`>;

//   /**乘法器（自然数） */
//   export type Multiply<A extends string | number | bigint, B extends string | number | bigint, _CarryCounter extends 1[] = [], _Result extends string = `0`> = B extends `` ? Number<_Result> :    //return
//     Multiply<A, DigitRest<B>, [..._CarryCounter, 1], Sum<_Result, TenPow<DigitMultiply<A, DigitFirst<B>>, _CarryCounter[`length`]>>>;
//   // 123 * 12345 ==>   (123 *     5)
//   //             ==> + (123 *    40)
//   //             ==> + (123 *   300)
//   //             ==> + (123 *  2000)
//   //             ==> + (123 * 10000)
// }

// /**乘法器处理超大数 */
// type Square<N extends number> = `${N}` extends `-${infer NN extends number}` ? multiply.Multiply<NN, NN> : multiply.Multiply<N, N>;

// type test_large_number = Square<3141592662951413>
//---------------------------------- large number version ----------------------------------


type MakeCounter<
    T extends number,
    R extends number[] = []
> = R['length'] extends T | 999 ? R : MakeCounter<T, [...R, 1]>;

type FlatCounter<T extends any[][], C extends any[] = []> = T extends [
    infer F extends any[],
    ...infer R extends any[][]
]
    ? FlatCounter<R, [...C, ...F]>
    : C;
type SimpleMultiply<
    T extends number,
    U extends number,
    C extends any[][] = []
> = T | U extends 100
    ? 10000
    : C['length'] extends U
    ? FlatCounter<C>['length']
    : SimpleMultiply<T, U, [...C, MakeCounter<T>]>;
type Square<T extends number> = `${T}` extends `-${infer N extends number}`
    ? SimpleMultiply<N, N>
    : SimpleMultiply<T, T>;

type SquareRes1 = Square<0> // 0
type SquareRes2 = Square<1> // 1
type SquareRes3 = Square<3> // 9
type SquareRes4 = Square<20> // 400
type SquareRes5 = Square<100> // 10000
type SquareRes6 = Square<-2> // 4
type SquareRes7 = Square<-5> // 25
type SquareRes8 = Square<-31> // 961
type SquareRes9 = Square<-50> // 2500