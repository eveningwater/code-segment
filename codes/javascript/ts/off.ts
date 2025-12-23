const off = (el: HTMLElement | Window,type: string,callback: EventListenerOrEventListenerObject,useCapture = false) => {
    if(el && typeof type === 'string' && typeof callback === 'function'){
        el.removeEventListener(type,callback,useCapture);
    }
}

const callback = () => console.log('!');
document.body.addEventListener('click', callback);
off(document.body, 'click', callback); // no longer logs '!' upon clicking on the page