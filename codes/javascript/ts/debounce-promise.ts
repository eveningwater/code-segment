const debouncePromise = <T, U, A>(handler: (...args: T[]) => U, ms: number) => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    const pending: {
        resolve: (value: unknown) => void,
        reject: (reason?: any) => void
    }[] = [];
    return (...args: A[]) =>
        new Promise((resolve, reject) => {
            timer && clearTimeout(timer);
            timer = setTimeout(() => {
                const currentPending = [...pending];
                pending.length = 0;
                Promise.resolve(handler.apply(this, args)).then(
                    data => {
                        currentPending.forEach(({ resolve: res }) => res(data));
                    },
                    error => {
                        currentPending.forEach(({ reject: rej }) => rej(error));
                    }
                );
            }, ms);
            pending.push({ resolve, reject });
        });
};

const fn = (arg: string) =>
    new Promise(resolve => {
        setTimeout(resolve, 1000, ['resolved', arg]);
    });
const debounced = debouncePromise(fn, 200);
debounced('foo').then(console.log);
debounced('bar').then(console.log);
// Will log ['resolved', 'bar'] both times