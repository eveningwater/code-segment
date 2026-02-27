const removeAttributes = (element: Element) => {
  Object.values(element.attributes).forEach(({ name }) => {
    element.removeAttribute(name);
  });
};

removeAttributes(document.querySelector('p.special')!);
// The paragraph will not have the 'special' class anymore