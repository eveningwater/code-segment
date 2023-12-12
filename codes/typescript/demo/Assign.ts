
type ForOf<T> = {
    [P in keyof T]: T[P]
}

type Merge<A, B> = ForOf<{
    [K in keyof A as K extends keyof B ? never : K]: A[K]
} & {
        [K in keyof B]: B[K]
    }>

type Assign<T extends Record<string, unknown>, U> = U extends [infer L, ...infer R]
    ? Assign<L extends Record<string, unknown> ? Merge<T, L> : T, R>
    : U extends Record<string, unknown>
    ? Merge<T, U>
    : T;
type Case1Target = {}
type Case1Origin1 = {
    a: 'a'
}
type Case1Origin2 = {
    b: 'b'
}
type Case1Origin3 = {
    c: 'c'
}
type Case1Answer = {
    a: 'a'
    b: 'b'
    c: 'c'
}

// case2
type Case2Target = {
    a: [1, 2, 3]
}

type Case2Origin1 = {
    a: {
        a1: 'a1'
    }
}

type Case2Origin2 = {
    b: [2, 3, 3]
}

type Case2Answer = {
    a: {
        a1: 'a1'
    }
    b: [2, 3, 3]
}

// case3

type Case3Target = {
    a: 1
    b: ['b']
}

type Case3Origin1 = {
    a: 2
    b: {
        b: 'b'
    }
    c: 'c1'
}

type Case3Origin2 = {
    a: 3
    c: 'c2'
    d: true
}

type Case3Answer = {
    a: 3
    b: {
        b: 'b'
    }
    c: 'c2'
    d: true
}

// case 4
type Case4Target = {
    a: 1
    b: ['b']
}

type Case4Answer = {
    a: 1
    b: ['b']
}


type AssignRes1 = Assign<Case1Target, [Case1Origin1, Case1Origin2, Case1Origin3]>; //  Case1Answer
type AssignRes2 = Assign<Case2Target, [Case2Origin1, Case2Origin2]>; //  Case2Answer
type AssignRes3 = Assign<Case3Target, [Case3Origin1, Case3Origin2]>; // Case3Answer
type AssignRes4 = Assign<Case4Target, ['', 0]>; //  Case4Answer
