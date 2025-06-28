const getParentsUntil = (el: HTMLElement, selector: string) => {
  const parents: HTMLElement[] = [];
  let _el = el.parentNode as HTMLElement;
  while (_el && _el.matches) {
    parents.unshift(_el);
    if (_el.matches(selector)) {
      return parents;
    } else {
      _el = _el.parentNode as HTMLElement;
    }
  }
  return parents;
};

getParentsUntil(document.querySelector("#home-link")!, "header");
// [header, nav, ul, li]
