const hasClass = (el: HTMLElement, className: string) => el.classList.contains(className);

hasClass(document.querySelector('p.special')!, 'special'); // true