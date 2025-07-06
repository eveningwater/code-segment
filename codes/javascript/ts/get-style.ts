const getStyle = (el: HTMLElement, ruleName: string) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p')!, 'font-size'); // '16px'