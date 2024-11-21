const capitalizeEveryWord = (str: string) =>
    str.replace(/\b[a-z]/g, w => w.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'