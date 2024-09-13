const JSONToCSV = <T extends Record<string, string | number>>(arr: T[], columns: string[], delimiter = ",") =>
    [
        columns.join(delimiter),
        ...arr.map(obj =>
            columns.reduce(
                (res, key) =>
                    `${res}${!res.length ? "" : delimiter}"${!obj[key] ? "" : obj[key]}"`,
                ""
            )
        ),
    ].join("\n");

JSONToCSV(
    [{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }],
    ["a", "b"]
); // 'a,b\n"1","2"\n"3","4"\n"6",""\n"","7"'