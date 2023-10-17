type DeepMutable<T> = keyof T extends never
    ? T
    : {
        -readonly [P in keyof T]: DeepMutable<T[P]>;
    };

interface Test1 {
    readonly title: string
    readonly description: string
    readonly completed: boolean
    readonly meta: {
        readonly author: string
    }
}
type Test2 = {
    readonly a: () => 1
    readonly b: string
    readonly c: {
        readonly d: boolean
        readonly e: {
            readonly g: {
                readonly h: {
                    readonly i: true
                    readonly j: 's'
                }
                readonly k: 'hello'
            }
            readonly l: readonly [
                'hi',
                {
                    readonly m: readonly ['hey']
                },
            ]
        }
    }
}
interface DeepMutableTest1 {
    title: string
    description: string
    completed: boolean
    meta: {
        author: string
    }
}

type DeepMutableTest2 = {
    a: () => 1
    b: string
    c: {
        d: boolean
        e: {
            g: {
                h: {
                    i: true
                    j: 's'
                }
                k: 'hello'
            }
            l: [
                'hi',
                {
                    m: ['hey']
                },
            ]
        }
    }
}

type DeepMutableRes1 = DeepMutable<Test1> // DeepMutableTest1
type DeepMutableRes2 = DeepMutable<Test2> // DeepMutableTest2