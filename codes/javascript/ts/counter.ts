const counter = (selector: string, start: number, end: number, step = 1, duration = 2000) => {
    const $ = (v: string) => document.querySelector<HTMLElement>(v);
    let current = start,
        _step = (end - start) * step < 0 ? -step : step,
        timer = setInterval(() => {
            current += _step;
            $(selector)!.innerHTML = `${Math.floor(current)}`;
            if (current >= end) {
                $(selector)!.innerHTML = `${end}`;
                clearInterval(timer);
            }
        }, Math.abs(Math.floor(duration / (end - start))));
    return timer;
};

counter('#my-id', 1, 1000, 5, 2000);
// Creates a 2-second timer for the element with id="my-id"