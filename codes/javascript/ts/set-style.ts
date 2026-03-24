
type WritableCSSStyleProperty = Exclude<
  {
    [K in keyof CSSStyleDeclaration]: CSSStyleDeclaration[K] extends Function
      ? never               // 排除方法
      : K extends number
        ? never             // 排除数字索引
        : K                 // 保留其他属性
  }[keyof CSSStyleDeclaration],
  'parentRule' | 'length'   // 排除已知的只读属性
>;

const setStyle = (el: HTMLElement, prop: WritableCSSStyleProperty, val: string) => (el.style[prop] = val);

setStyle(document.querySelector('p')!, 'fontSize', '20px');
// The first <p> element on the page will have a font-size of 20px

// 更好的写法，也支持自定义属性
// const setStyle = (el: HTMLElement, prop: string, val: string) => {
//   el.style.setProperty(prop, val);
// };
// setStyle(document.querySelector('p')!, 'font-size', '20px'); // ✅ 正确
