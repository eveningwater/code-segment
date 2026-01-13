const palindrome = (str: string) => {
    const s = str.toLowerCase().replace(/[\W_]/g,'');
    return [...s].reverse().join('');
}

palindrome('taco cat'); // true