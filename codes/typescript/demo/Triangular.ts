type Triangular<
    N extends number,
    T extends number[] = [],
    U extends number[] = []
> = T['length'] extends N
    ? U['length']
    : Triangular<N, [...T, 0], [...T, ...U, 0]>;

type TriangularRes1 = Triangular<0> // 0
type TriangularRes2 = Triangular<1> // 1
type TriangularRes3 = Triangular<3> // 6
type TriangularRes4 = Triangular<10> // 55
type TriangularRes5 = Triangular<20> // 210
type TriangularRes6 = Triangular<55> // 1540
type TriangularRes7 = Triangular<100> // 5050