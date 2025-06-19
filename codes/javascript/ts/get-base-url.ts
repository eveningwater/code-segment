const getBaseURL = (url: string) => url.replace(/[?#].*$/, "");

getBaseURL("http://url.com/page?name=Adam&surname=Smith");
// 'http://url.com/page'
