const firstStringBetween = (str: string, start: string, end: string) => {
    const startIdx = str.indexOf(start);
    const endIdx = str.indexOf(end, startIdx + 1);

    if (startIdx === -1 || endIdx === -1 || startIdx >= endIdx) {
        return '';
    }

    return str.slice(startIdx + 1, endIdx).trim();
}

firstStringBetween('This is a [custom] string', '[', ']'); // custom