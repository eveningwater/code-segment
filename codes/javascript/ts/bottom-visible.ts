const bottomVisible = () => {
    const { clientHeight, scrollHeight } = document.documentElement;
    const { scrollY } = window;
    return clientHeight + scrollY >= (scrollHeight || clientHeight);
};

bottomVisible(); // true or false