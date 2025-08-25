const isAbsoluteURL = (url: string) => /^[a-z][a-z+.-]*:/.test(url);

isAbsoluteURL("https://google.com"); // true
isAbsoluteURL("ftp://www.myserver.net"); // true
isAbsoluteURL("/foo/bar"); // false
