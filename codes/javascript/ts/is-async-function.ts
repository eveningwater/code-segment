const isAsyncFunction = <T>(val: T) =>
    Object.prototype.toString.call(val) === '[object AsyncFunction]';

isAsyncFunction(function () {}); // false
isAsyncFunction(async function () {}); // true