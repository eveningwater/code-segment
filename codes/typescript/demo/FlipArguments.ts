type Reverse<T extends any[]> = T extends [infer F, ...infer R]
    ? [...Reverse<R>, F]
    : T;
type FlipArguments<T extends (...args: any) => any> = T extends (...args: infer A) => infer R ? (...args: Reverse<A>) => R : T;

type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>
// (arg0: boolean, arg1: number, arg2: string) => void