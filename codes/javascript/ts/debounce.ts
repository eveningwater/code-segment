const debounce = <T, U>(handler: (...args: T[]) => U, ms: number) => {
    let time: ReturnType<typeof setTimeout> | null = null;
    return function (...args: T[]) {
        time && clearTimeout(time);
        time = setTimeout(() => handler.apply(this, args), ms);
    };
};

window.addEventListener(
    'resize',
    debounce<UIEvent, void>(() => {
        console.log(window.innerWidth);
        console.log(window.innerHeight);
    }, 250)
);
