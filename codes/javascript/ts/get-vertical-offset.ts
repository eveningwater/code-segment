const getVerticalOffset = (el: HTMLElement) => {
  let offsetTop = el.offsetTop,
    _el = el;
  while (_el.offsetParent) {
    _el = _el.offsetParent as HTMLElement;
    offsetTop += _el.offsetTop;
  }
  return offsetTop;
};

getVerticalOffset(document.querySelector(".my-element")!); // 120
