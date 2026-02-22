const redirect = (url: string, asLink = true) =>
    asLink ? (window.location.href = url) : window.location.replace(url);

redirect('https://google.com');