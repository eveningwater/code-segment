const show = (...el: HTMLElement[]) => [...el].forEach(item => (item.style.display = ''));

show(...document.querySelectorAll('img'));
// Shows all <img> elements on the page
