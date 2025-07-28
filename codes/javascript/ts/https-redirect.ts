const httpsRedirect = () => {
    if (location.protocol !== 'https:') {
        location.replace('https://' + location.href.split('//')[1]);
    }
};

httpsRedirect();
// If you are on http://mydomain.com, you are redirected to https://mydomain.com