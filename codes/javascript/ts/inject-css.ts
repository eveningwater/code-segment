const injectCSS = (css: string) => {
  const style = document.createElement("style");
  style.innerText = css;
  style.type = "text/css";
  document.head.appendChild(style);
  return style;
};

injectCSS("body { background-color: #000 }");
// '<style type="text/css">body { background-color: #000 }</style>'
