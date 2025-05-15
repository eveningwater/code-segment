const addStyles = <T extends HTMLElement>(
  el: T,
  styles: Partial<CSSStyleDeclaration>
) => Object.assign(el.style, styles);

addStyles(document.getElementById("my-element")!, {
  background: "red",
  color: "#ffff00",
  fontSize: "3rem",
});
