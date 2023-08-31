type RemoveIndexSignature<T> = {
    [K in keyof T as K extends `${infer R}` ? R : never]: T[K]
}

type RemoveIndexSignatureFoo = {
    [key: string]: any
    foo(): void
}

type RemoveIndexSignatureA = RemoveIndexSignature<RemoveIndexSignatureFoo> // expected { foo(): void }