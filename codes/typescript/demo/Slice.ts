type ToPositive<
    N extends number,
    Arr extends unknown[]
> = `${N}` extends `-${infer P extends number}` ? Slice<Arr, P>['length'] : N;


type InitialN<
    Arr extends unknown[],
    N extends number,
    _Acc extends unknown[] = []
> = _Acc['length'] extends N | Arr['length']
    ? _Acc
    : InitialN<Arr, N, [..._Acc, Arr[_Acc['length']]]>;

type Slice<
    Arr extends unknown[],
    Start extends number = 0,
    End extends number = Arr['length']
> = InitialN<Arr, ToPositive<End, Arr>> extends [
    ...InitialN<Arr, ToPositive<Start, Arr>>,
    ...infer R
]
    ? R
    : [];
type Arr = [1, 2, 3, 4, 5];
// basic
type SliceRes1 = Slice<Arr, 0, 1>; // [1]
type SliceRes2 = Slice<Arr, 0, 0>; // []
type SliceRes3 = Slice<Arr, 2, 4>; // [3, 4]

// optional args
type SliceRes4 = Slice<[]>; // []
type SliceRes5 = Slice<Arr>; // Arr
type SliceRes6 = Slice<Arr, 0>; // Arr
type SliceRes7 = Slice<Arr, 2>; // [3, 4, 5]

// negative index
type SliceRes8 = Slice<Arr, 0, -1>; //  [1, 2, 3, 4]
type SliceRes9 = Slice<Arr, -3, -1>; //  [3, 4]

// invalid
type SliceRes10 = Slice<Arr, 10>; //  []
type SliceRes11 = Slice<Arr, 1, 0>; //  []
type SliceRes12 = Slice<Arr, 10, 20>; //  []