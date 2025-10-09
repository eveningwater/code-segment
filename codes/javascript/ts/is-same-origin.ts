const isSameOrigin = (origin: URL, destination: URL) =>
    origin.protocol === destination.protocol && origin.host === destination.host;

const testOrigin = new URL('https://eveningwater.com/my-web-projects/');
const testDestination = new URL('https://eveningwater.com/my-web-projects/home/');
isSameOrigin(testOrigin, testDestination); // true
const testOther = new URL('https://developer.mozilla.org');
isSameOrigin(testOrigin, testOther); // false