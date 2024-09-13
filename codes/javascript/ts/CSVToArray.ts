const CSVToArray = (str: string, delimiter = ',', omitFirstRow = false) => {
    return str
        .slice(omitFirstRow ? str.indexOf('\n') + 1 : 0)
        .split('\n')
        .map(v => v.split(delimiter));
};

CSVToArray('a,b\nc,d'); // [['a', 'b'], ['c', 'd']];
CSVToArray('a;b\nc;d', ';'); // [['a', 'b'], ['c', 'd']];
CSVToArray('col1,col2\na,b\nc,d', ',', true); // [['a', 'b'], ['c', 'd']];