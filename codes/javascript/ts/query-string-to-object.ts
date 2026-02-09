const queryStringToObject = (url: string) =>
    [...new URLSearchParams(url.split('?')[1])].reduce<Record<string, string>>(
        (a, [k, v]) => ((a[k] = v), a),
        {}
    );

queryStringToObject('https://google.com?page=1&count=10');
// {page: '1', count: '10'}