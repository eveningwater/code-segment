class A {
    public str: string
    protected num: number
    private bool: boolean
    constructor() {
        this.str = 'naive'
        this.num = 19260917
        this.bool = true
    }

    getNum() {
        return Math.random()
    }
}

type ClassPublicKeys<T, P = keyof T> =
    P extends keyof T
    ? P
    : never;
type ClassPublicKeysRes = ClassPublicKeys<A>; //  'str' | 'getNum'