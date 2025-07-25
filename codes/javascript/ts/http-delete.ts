const httpDelete = (url: string, callback: (request: XMLHttpRequest) => void, error = console.error) => {
    const request = new XMLHttpRequest();
    request.open('DELETE', url, true);
    request.onload = () => callback(request);
    request.onerror = () => error(request);
    request.send();
};

httpDelete('https://jsonplaceholder.typicode.com/posts/1', request => {
    console.log(request.responseText);
}); // Logs: {}