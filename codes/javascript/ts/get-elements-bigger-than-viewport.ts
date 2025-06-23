const getElementsBiggerThanViewport = () => {
    const docWidth = document.documentElement.offsetWidth;
    return [...document.querySelectorAll<HTMLElement>('*')].filter(
        el => el.offsetWidth > docWidth
    );
};

getElementsBiggerThanViewport(); // <div id="ultra-wide-item" />