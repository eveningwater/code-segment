const CSVToJSON = (str: string, delimiter = ",") => {
    const titles = str.slice(0, str.indexOf("\n")).split(delimiter);
    return str
        .slice(str.indexOf("\n") + 1)
        .split("\n")
        .map((v) => {
            const values = v.split(delimiter);
            return titles.reduce<Record<string, string>>(
                (obj, title, index) => ((obj[title] = values[index]), obj),
                {}
            );
        });
};

CSVToJSON("col1,col2\na,b\nc,d");
// [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];