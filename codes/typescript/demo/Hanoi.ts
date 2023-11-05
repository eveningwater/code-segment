type Helper<
    N extends number,
    C extends number[],
    From extends unknown,
    To extends unknown,
    Intermediate extends unknown
> = C['length'] extends N
    ? []
    : [
        ...Helper<N, [...C, 1], From, Intermediate, To>,
        [From, To],
        ...Helper<N, [...C, 1], Intermediate, To, From>
    ];
type Hanoi<N extends number, From = 'A', To = 'B', Intermediate = 'C'> = Helper<
    N,
    [],
    From,
    To,
    Intermediate
>;

type HanoiRes1 = Hanoi<0> // []
type HanoiRes2 = Hanoi<1> // [['A', 'B']]
type HanoiRes3 = Hanoi<2> // [['A', 'C'], ['A', 'B'], ['C', 'B']]
type HanoiRes4 = Hanoi<3>  // [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']]
type HanoiRes5 = Hanoi<5> // [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['B', 'A'], ['C', 'A'], ['B', 'C'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['C', 'A'], ['B', 'C'], ['B', 'A'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']]