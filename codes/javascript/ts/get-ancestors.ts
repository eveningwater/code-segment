const getAncestors = (el: Node) => {
  const ancestors: Node[] = [];
  while (el) {
    ancestors.unshift(el);
    el = el.parentNode!;
  }
  return ancestors;
};
getAncestors(document.querySelector("nav")!);
// [document, html, body, header, nav]
