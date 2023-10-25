type P = {
    string: string;
    number: number;
    boolean: boolean;
};

type H<T, K extends keyof P> = T extends { enum: unknown[] }
    ? T['enum'][number]
    : P[K];
type O<T> = T extends { properties: infer Prop extends Record<string, unknown> }
    ? T extends { required: infer R extends unknown[] }
    ? Omit<
        {
            [K in R[number] & keyof Prop]: JSONSchema2TS<Prop[K]>;
        } & {
            [K in Exclude<keyof Prop, R[number]>]?: JSONSchema2TS<Prop[K]>;
        },
        never
    >
    : {
        [K in keyof Prop]?: JSONSchema2TS<Prop[K]>;
    }
    : Record<string, unknown>;
type A<T> = T extends { items: infer I } ? JSONSchema2TS<I>[] : unknown[];
type JSONSchema2TS<T> = T extends { type: infer Type }
    ? Type extends keyof P
    ? H<T, Type>
    : Type extends 'object'
    ? O<T>
    : A<T>
    : never;


// + Primitive types
type JSONSchema2TSRes1 = JSONSchema2TS<{ type: 'string' }>; // string
type JSONSchema2TSRes2 = JSONSchema2TS<{ type: 'number' }>; // number
type JSONSchema2TSRes3 = JSONSchema2TS<{ type: 'boolean' }>; // boolean
// - Primitive types
// + Enums
type JSONSchema2TSRes4 = JSONSchema2TS<{ type: 'string', enum: ['a', 'b', 'c'] }>; // 'a' | 'b' | 'c'
type JSONSchema2TSRes5 = JSONSchema2TS<{ type: 'number', enum: [1, 2, 3] }>; // 1 | 2 | 3
// - Enums
// + Object types
type JSONSchema2TSRes6 = JSONSchema2TS<{ type: 'object' }>; // Record<string, unknown>
type JSONSchema2TSRes7 = JSONSchema2TS<{ type: 'object', properties: {} }>; // {}
type JSONSchema2TSRes8 = JSONSchema2TS<{ type: 'object', properties: { a: { type: 'string' } } }>;
// {
//    a?: string
// }
// - Object types
// + Arrays
type JSONSchema2TSRes9 = JSONSchema2TS<{ type: 'array' }>; // unknown[]
type JSONSchema2TSRes10 = JSONSchema2TS<{
    type: 'array'
    items: {
        type: 'string'
    }
}>; // string[]
type JSONSchema2TSRes11 = JSONSchema2TS<{
    type: 'array'
    items: {
        type: 'object'
    }
}>;// Record<string, unknown>[]
// - Arrays
// + Mixed types
type JSONSchema2TSRes12 = JSONSchema2TS<{
    type: 'object'
    properties: {
        a: {
            type: 'string'
            enum: ['a', 'b', 'c']
        }
        b: {
            type: 'number'
        }
    }
}>
// {
//     a?: 'a' | 'b' | 'c'
//     b?: number
// }
type JSONSchema2TSRes13 = JSONSchema2TS<{
    type: 'array'
    items: {
        type: 'object'
        properties: {
            a: {
                type: 'string'
            }
        }
    }
}>
// {
//   a?: string
// }[]
// - Mixed types
// + Required fields
type JSONSchema2TSRes14 = JSONSchema2TS<{
    type: 'object'
    properties: {
        req1: { type: 'string' }
        req2: {
            type: 'object'
            properties: {
                a: {
                    type: 'number'
                }
            }
            required: ['a']
        }
        add1: { type: 'string' }
        add2: {
            type: 'array'
            items: {
                type: 'number'
            }
        }
    }
    required: ['req1', 'req2']
}>
// {
//     req1: string
//     req2: { a: number }
//     add1?: string
//     add2?: number[]
// }
