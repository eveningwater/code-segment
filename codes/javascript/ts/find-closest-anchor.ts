const findClosestAnchor = (node: Node) => {
  for (let n = node; n.parentNode; n = n.parentNode) {
    if (n.nodeName.toLowerCase() === "a") {
      return n;
    }
  }
  return null;
};

findClosestAnchor(document.querySelector("a > span")!); // a
