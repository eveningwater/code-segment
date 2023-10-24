type Transpose<T extends number[][], R = T['length'] extends 0 ? [] : T[0]> = {
    [X in keyof R]: {
        [Y in keyof T]: X extends keyof T[Y] ? T[Y][X] : never
    }
}


type TransposeRes1 = Transpose<[]>; // []
type TransposeRes2 = Transpose<[[1]]>; // [[1]]
type TransposeRes3 = Transpose<[[1, 2]]>; // [[1], [2]]
type TransposeRes4 = Transpose<[[1, 2], [3, 4]]>; // [[1, 3], [2, 4]]
type TransposeRes5 = Transpose<[[1, 2, 3], [4, 5, 6]]>; // [[1, 4], [2, 5], [3, 6]]
type TransposeRes6 = Transpose<[[1, 4], [2, 5], [3, 6]]>; // [[1, 2, 3], [4, 5, 6]]
type TransposeRes7 = Transpose<[[1, 2, 3], [4, 5, 6], [7, 8, 9]]>; // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]