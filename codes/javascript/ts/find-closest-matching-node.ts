const findClosestMatchingNode = (node: HTMLElement, selector: string) => {
  for (let n = node; n.parentNode; n = n.parentNode as HTMLElement) {
    if (n.matches && n.matches(selector)) {
      return n;
    }
  }
  return null;
};

findClosestMatchingNode(document.querySelector("span")!, "body"); // body
