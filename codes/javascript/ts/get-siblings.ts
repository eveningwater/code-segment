const getSiblings = (el: HTMLHeadElement) =>
  [...(el.parentNode?.childNodes ?? [])].filter(
    (item) => item !== el && el.nodeType !== 3
  );

getSiblings(document.querySelector("head")!); // ['body']
