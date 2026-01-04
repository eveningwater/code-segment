const once = <T, U>(fn: (...args: T[]) => U) => {
    let called = false;
    return function (...args: T[]) {
        if (called) {
            return;
        }
        called = true;
        return fn.apply(this, args);
    }
}

const startApp = function (event: Event) {
    console.log(this, event); // document.body, MouseEvent
};
document.body.addEventListener('click', once(startApp));
// only runs `startApp` once upon click