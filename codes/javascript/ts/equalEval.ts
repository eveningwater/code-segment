const equalEval = <T>(str: string): T => new Function('return ' + str)();

equalEval<void>('console.log(123)'); // 123
equalEval<number>('123'); // 123
