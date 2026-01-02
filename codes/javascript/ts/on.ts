interface OnOptions extends AddEventListenerOptions {
    target?: string;
}

const on = (el: Document | HTMLElement, type: string, handler: EventListenerOrEventListenerObject, opts: OnOptions = {}) => {
    const delegatorFn = (e: Event) => {
        const target = e.target as HTMLElement;
        return target.matches(opts.target!) && (handler as Function).call(target, e);
    };
    if (el && type && typeof handler === 'function') {
        el.addEventListener(type, opts.target ? delegatorFn : handler, opts.capture || false);
        if (opts.target) {
            return delegatorFn;
        }
    }
}

const fn = () => console.log('!');
on(document.body, 'click', fn); // logs '!' upon clicking the body
on(document.body, 'click', fn, { target: 'p' });
// logs '!' upon clicking a `p` element child of the body
on(document.body, 'click', fn, { capture: true });
// use capturing instead of bubbling