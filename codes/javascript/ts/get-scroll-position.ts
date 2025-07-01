const getScrollPosition = (el: Window | HTMLElement = window) => {
  if (el === window) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset,
    };
  } else {
    return {
      x: (el as HTMLElement).scrollLeft,
      y: (el as HTMLElement).scrollTop,
    };
  }
};

getScrollPosition(); // {x: 0, y: 200}
