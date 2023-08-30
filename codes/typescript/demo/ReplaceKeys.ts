type ReplaceKeys<U, T, Y> = {
    [K in keyof U]: K extends T ? K extends keyof Y ? Y[K] : never : U[K]
}

type ReplaceKeysNodeA = {
    type: "A"
    name: string
    flag: number
}

type ReplaceKeysNodeB = {
    type: "B"
    id: number
    flag: number
}

type ReplaceKeysNodeC = {
    type: "C"
    name: string
    flag: number
}

type Nodes = ReplaceKeysNodeA | ReplaceKeysNodeB | ReplaceKeysNodeC;

type ReplacedNodes = ReplaceKeys<
    Nodes,
    "name" | "flag",
    { name: number; flag: string }
> // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = ReplaceKeys<Nodes, "name", { aa: number }> // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never