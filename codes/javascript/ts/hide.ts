const hide = (...elements: HTMLElement[]) =>
    elements.forEach((el) => (el.style.display = 'none'));

hide(...document.querySelectorAll('img')); // Hides all <img> elements on the page