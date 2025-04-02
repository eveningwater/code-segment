const delay = <T>(handler: TimerHandler, ms: number, ...args: T[]) => setTimeout(handler, ms, ...args as T[]);
delay(
    function (text: string) {
        console.log(text);
    },
    1000,
    'later'
); // Logs 'later' after one second.