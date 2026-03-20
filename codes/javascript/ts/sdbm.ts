const sdbm = (str: string) => {
    let arr = str.split('');
    return arr.reduce(
        (hashCode, currentVal) =>
        (hashCode =
            currentVal.charCodeAt(0) +
            (hashCode << 6) +
            (hashCode << 16) -
            hashCode),
        0
    );
};

sdbm('name'); // -3521204949