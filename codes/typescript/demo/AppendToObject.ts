type AppendToObject<T, U extends keyof any, V> = {
    [K in keyof T | U]: K extends keyof T ? T[K] : V
}

type AppendToObjectTest = { id: '1' }
type AppendToObjectResult = AppendToObject<AppendToObjectTest, 'value', 4> // expected to be { id: '1', value: 4 }