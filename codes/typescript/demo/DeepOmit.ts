type DeepOmit<T, P> = {
    [K in keyof T as K extends P ? never : K]: K extends P
    ? never
    : P extends `${infer F}.${infer R}`
    ? K extends F
    ? DeepOmit<T[K], R>
    : T[K]
    : T[K];
};

type TestObj = {
    person: {
        name: string
        age: {
            value: number
        }
    }
}

type DeepOmitRes1 = DeepOmit<TestObj, 'person'> // {}
type DeepOmitRes2 = DeepOmit<TestObj, 'person.name'> // { person: { age: { value: number } } }
type DeepOmitRes3 = DeepOmit<TestObj, 'name'> // TestObj
type DeepOmitRes4 = DeepOmit<TestObj, 'person.age.value'> // { person: { name: string; age: {} } }