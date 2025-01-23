const bindKey =
    <T,U>(context: T, handler: string, ...bindArgs: U[]) =>
        (...args: U[]):U =>
            context[handler].apply(context, [...bindArgs, ...args]);

const freddy = {
    user: 'fred',
    greet: function (greeting: string, punctuation: string) {
        return greeting + ' ' + this.user + punctuation;
    }
};
const freddyBound = bindKey<typeof freddy,string>(freddy, 'greet');
console.log(freddyBound('hi', '!')); // 'hi fred!'