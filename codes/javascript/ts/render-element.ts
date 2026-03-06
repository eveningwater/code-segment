interface VNode {
    type?: string;
    props?: Record<string, any>;
    children?: VNode[];
}

const renderElement = <T extends VNode>(vNodeObj: T, container = document.body) => {
  let _container =
    typeof container === 'string'
      ? document.querySelector(container)
      : container;
  if (!_container) {
    _container = document.body;
  }
  const { type, children, props = {} } = vNodeObj;
  const isTextElement = !type || type === 'text';
  const element = isTextElement
    ? document.createTextNode('')
    : document.createElement(type);
  const isListener = (p: string) => p.startsWith('on');
  const isAttribute = (p: string) => p !== 'children' && !isListener(p);
  Object.keys(props).forEach((p: string) => {
    if (isAttribute(p)) {
      if (isTextElement) {
        (element as Text as Record<string, any>)[p] = props[p];
      } else {
        (element as HTMLElement as Record<string, any>)[p] = props[p];
      }
    }
    if (!isTextElement && isListener(p)) {
      element.addEventListener(p.toLowerCase().slice(2), props[p]);
    }
  });
  if (!isTextElement && Array.isArray(children) && children.length) {
    children.forEach(child => renderElement(child, element as HTMLElement));
  }
  _container.appendChild(element);
};

const myElement = {
  type: 'div',
  props: {
    className: 'container'
  },
  children: [
    {
      type: 'button',
      props: {
        className: 'btn',
        type: 'button',
        onClick: () => alert('Clicked!')
      },
      children: [
        {
          props: { nodeValue: 'click me!' }
        }
      ]
    }
  ]
};
renderElement(myElement);
