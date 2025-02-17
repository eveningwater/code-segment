const coalesce = (...args: any[]) => args.find(v => ![undefined, null].includes(v));
coalesce(null, undefined, '', NaN, 'Waldo'); // ''