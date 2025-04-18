const elementContains = <T extends HTMLElement, U extends T>(
  parent: T,
  child: U
) => parent !== child && parent.contains(child);

elementContains(
  document.querySelector("head")!,
  document.querySelector("title")!
);
// true
elementContains(
  document.querySelector("body")!,
  document.querySelector("body")!
);
// false
