type IsDivByThree<T extends unknown[]> = T extends [...infer Start, unknown, unknown, unknown]
    ? Start extends []
    ? 'Fizz'
    : IsDivByThree<Start>
    : false;

type IsDivByFive<T extends unknown[]> = T extends [...infer Start, unknown, unknown, unknown, unknown, unknown]
    ? Start extends []
    ? 'Buzz'
    : IsDivByFive<Start>
    : false;

type FizzBuzz<N extends number, Acc extends unknown[] = []> = N extends Acc['length']
    ? Acc
    : FizzBuzz<N, [...Acc,
        `${(IsDivByThree<[...Acc, '']> | IsDivByFive<[...Acc, '']>) extends false
        ? [...Acc, '']['length'] extends number ? [...Acc, '']['length'] : never
        : ''
        }${IsDivByThree<[...Acc, '']> extends string ? 'Fizz' : ''
        }${IsDivByFive<[...Acc, '']> extends string ? 'Buzz' : ''
        }`
    ]>;

type FizzBuzzRes1 = FizzBuzz<1>; // ['1']
type FizzBuzzRes2 = FizzBuzz<5>; // ['1', '2', 'Fizz', '4', 'Buzz']
type FizzBuzzRes3 = FizzBuzz<20>;
//  [
//   '1',
//   '2',
//   'Fizz',
//   '4',
//   'Buzz',
//   'Fizz',
//   '7',
//   '8',
//   'Fizz',
//   'Buzz',
//   '11',
//   'Fizz',
//   '13',
//   '14',
//   'FizzBuzz',
//   '16',
//   '17',
//   'Fizz',
//   '19',
//   'Buzz',
// ];
type FizzBuzzRes4 = FizzBuzz<100>;

// [
//   '1',
//   '2',
//   'Fizz',
//   '4',
//   'Buzz',
//   'Fizz',
//   '7',
//   '8',
//   'Fizz',
//   'Buzz',
//   '11',
//   'Fizz',
//   '13',
//   '14',
//   'FizzBuzz',
//   '16',
//   '17',
//   'Fizz',
//   '19',
//   'Buzz',
//   'Fizz',
//   '22',
//   '23',
//   'Fizz',
//   'Buzz',
//   '26',
//   'Fizz',
//   '28',
//   '29',
//   'FizzBuzz',
//   '31',
//   '32',
//   'Fizz',
//   '34',
//   'Buzz',
//   'Fizz',
//   '37',
//   '38',
//   'Fizz',
//   'Buzz',
//   '41',
//   'Fizz',
//   '43',
//   '44',
//   'FizzBuzz',
//   '46',
//   '47',
//   'Fizz',
//   '49',
//   'Buzz',
//   'Fizz',
//   '52',
//   '53',
//   'Fizz',
//   'Buzz',
//   '56',
//   'Fizz',
//   '58',
//   '59',
//   'FizzBuzz',
//   '61',
//   '62',
//   'Fizz',
//   '64',
//   'Buzz',
//   'Fizz',
//   '67',
//   '68',
//   'Fizz',
//   'Buzz',
//   '71',
//   'Fizz',
//   '73',
//   '74',
//   'FizzBuzz',
//   '76',
//   '77',
//   'Fizz',
//   '79',
//   'Buzz',
//   'Fizz',
//   '82',
//   '83',
//   'Fizz',
//   'Buzz',
//   '86',
//   'Fizz',
//   '88',
//   '89',
//   'FizzBuzz',
//   '91',
//   '92',
//   'Fizz',
//   '94',
//   'Buzz',
//   'Fizz',
//   '97',
//   '98',
//   'Fizz',
//   'Buzz',
// ]