type Curried<F> = F extends (...args: infer A) => infer R
    ? A extends [infer F, ...infer Other]
    ? (
        args: F
    ) => Other['length'] extends 0 ? R : Curried<(...args: Other) => R>
    : () => R
    : never;
declare function Currying<F>(fn: F): Curried<F>;
const curried1 = Currying((a: string, b: number, c: boolean) => true);
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true);
const curried3 = Currying(() => true);

type c1 = typeof curried1; //(a: string) => (b: number) => (c: boolean) => true
type c2 = typeof curried2;  // (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
type c3 = typeof curried3; //  () => true
