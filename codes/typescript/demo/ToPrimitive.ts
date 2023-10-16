type ToPrimitive<T> = T extends object ? ({
    [K in keyof T]: ToPrimitive<T[K]>
}) : (T extends { valueOf: () => infer P } ? P : T);
type PersonInfo = {
    name: 'Tom'
    age: 30
    married: false
    addr: {
        home: '123456'
        phone: '13111111111'
    }
    hobbies: ['sing', 'dance']
    readonlyArr: readonly ['test']
    fn: () => any
}

type ExpectedResult = {
    name: string
    age: number
    married: boolean
    addr: {
        home: string
        phone: string
    }
    hobbies: [string, string]
    readonlyArr: readonly [string]
    fn: Function
}

type ToPrimitiveRes = ToPrimitive<PersonInfo>; // ExpectedResult