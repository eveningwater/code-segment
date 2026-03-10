const resolveAfter = <T>(value: T, delay: number) =>
    new Promise<T>(resolve => {
        setTimeout(() => resolve(value), delay);
    });

resolveAfter('Hello', 1000);
// Returns a promise that resolves to 'Hello' after 1s