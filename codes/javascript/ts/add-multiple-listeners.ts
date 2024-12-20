const addMultipleListeners = (el: HTMLElement, eventType: string[], listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) =>
    eventType.forEach(type =>
        el?.addEventListener(type, listener, options)
    );
addMultipleListeners(
    document.querySelector('.my-element')!,
    ['click', 'mousedown'],
    () => {
        console.log('hello!');
    }
);