const compact = <T>(arr:T[]) => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', +'e' * 23, NaN, 's', 34]);