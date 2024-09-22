const URLJoin = (...args: string[]) =>
    args
        .join('/')
        .replace(/[\/]+/g, '/')
        .replace(/^(.+):\//, '$1://')
        .replace(/^file:/, 'file:/')
        .replace(/\/(\?|&|#[^!])/g, '$1')
        .replace(/\?/g, '&')
        .replace('&', '?');

URLJoin('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo'); 
// 'http://www.google.com/a/b/cd?foo=123&bar=foo'