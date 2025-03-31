const defer = <T>(handler: TimerHandler, ...args:T[]) => setTimeout(handler, 1, ...args as T[]);

// Example A:
defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'

// Example B:
const longRunningFunction = () => {
    document.querySelector('#test')!.innerHTML = 'Hello';
}
defer(longRunningFunction);