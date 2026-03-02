const removeElement = (el: HTMLElement) => el.parentNode!.removeChild(el);

removeElement(document.querySelector('#my-element')!);
// Removes #my-element from the DOM