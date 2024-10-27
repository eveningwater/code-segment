const attempt = <T, U extends T>(fn: (...a: T[]) => void, ...args: U[]) => {
    try {
        return fn(...args);
    } catch (e) {
        return e instanceof Error ? e : new Error(e);
    }
};

let elements: unknown = attempt<string, string>(selector => document.querySelectorAll(selector), '>_>');
if (elements instanceof Error) {
    elements = []; //elements = []
} 