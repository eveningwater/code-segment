const parseCookie = (str: string) => str.split(";").map(v => v.split("=")).reduce<Record<string, string>>((acc,[key,value]) => {
    acc[decodeURIComponent(key).trim()] = decodeURIComponent(value).trim();
    return acc;
},{});

parseCookie('foo=bar; equation=E%3Dmc%5E2');
// { foo: 'bar', equation: 'E=mc^2' }