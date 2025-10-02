const isPromiseLike = (obj: any) =>
    obj !== null &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function';

isPromiseLike({
    then: function () {
        return '';
    }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false