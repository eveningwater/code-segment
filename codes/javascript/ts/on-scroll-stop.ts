const onScrollStop = (callback: (e: Event, a: boolean) => void, n = 150) => {
    let timer, isScrolling = false;
    window.addEventListener('scroll', e => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            isScrolling = true;
            callback?.(e, isScrolling);
        }, n);
    }, false)
}

onScrollStop(() => {
    console.log('The user has stopped scrolling');
});