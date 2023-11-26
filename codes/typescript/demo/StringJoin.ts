type Tuple = readonly string[];

type Tail<T extends Tuple> = T extends readonly [infer _, ...infer R] ? R : [];

type Join<T extends Tuple, Separator extends string> = T extends readonly []
    ? ''
    : T extends readonly [infer F]
    ? F
    : `${T[0]}${Separator}${Join<Tail<T>, Separator>}`;

declare function join<D extends string>(delimiter: D): <P extends Tuple>(...args: P) => Join<P, D>;


// Edge cases
const noCharsOutput = join('-')()
const oneCharOutput = join('-')('a')
const noDelimiterOutput = join('')('a', 'b', 'c')

// Regular cases
const hyphenOutput = join('-')('a', 'b', 'c')
const hashOutput = join('#')('a', 'b', 'c')
const twoCharOutput = join('-')('a', 'b')
const longOutput = join('-')('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h')


type joinRes1 = typeof noCharsOutput; //  ''
type joinRes2 = typeof oneCharOutput; //  'a'
type joinRes3 = typeof noDelimiterOutput; //  'abc'
type joinRes4 = typeof twoCharOutput; //  'a-b'
type joinRes5 = typeof hyphenOutput; //  'a-b-c'
type joinRes6 = typeof hashOutput; //  'a#b#c'
type joinRes7 = typeof longOutput; //  'a-b-c-d-e-f-g-h'
