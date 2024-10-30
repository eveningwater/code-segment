const getURLParam = (url: string) => {
    let res = {};
    if (url.lastIndexOf('?') === -1) return res;
    let param = decodeURIComponent(url.slice(url.lastIndexOf('?') + 1));
    let keys: string[] | RegExpMatchArray | null = param.match(/(\w+\=)|\=/g);
    keys && (keys = keys.map(k => k.replace(/\=/g, '')));
    let values: string[] | RegExpMatchArray | null = param.match(/(\=(\w+|\s*)\&)|(\=(\w+|\s*))/g);
    values && (values = values.map(v => v.replace(/\&|\=/g, '')));
    keys && keys.forEach((k, i) => (res[k] = values![i]));
    return res;
};

const param = getURLParam('https://www.test.com/?_aaa=111&_bbb=222');
console.log(param); //{ _aaa:111,_bbb:222 }