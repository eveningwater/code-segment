const addClass = <T extends Element>(el: T, className: string | string[]) =>
  el.classList.add(...(Array.isArray(className) ? className : [className]));

addClass(document.querySelector("p")!, "special");
// The paragraph will now have the 'special' class
