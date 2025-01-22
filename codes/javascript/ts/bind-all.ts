type Callback<T> = (this: T, ...args: any[]) => any;
const bindAll = <T, U extends string>(obj: Record<string,T | Callback<T>>, ...handlers: U []) => {
    handlers.forEach(
        handler => {
            const h = obj[handler] as Callback<T>;
            obj[handler] = function () {
                return h.apply(obj);
            }
        }
    );
}
    

const view = {
    label: 'docs',
    click: function () {
        console.log('clicked ' + this.label);
    }
};
bindAll(view, 'click');
document.addEventListener('click', view.click);
// Log 'clicked docs' when clicked.