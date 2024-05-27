const CSVToArray = (str: string, delimiter = ',', omitFirstRow = false) => {
    return str
        .slice(omitFirstRow ? str.indexOf('\n') + 1 : 0)
        .split('\n')
        .map(v => v.split(delimiter));
};