const removeEventListenerAll = <T extends Node>(
  targets: NodeListOf<T>,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) => {
  targets.forEach(target => {
    target.removeEventListener(type, listener, options);
  });
};

const linkListener = () => console.log('Clicked a link');
document.querySelector('a')?.addEventListener('click', linkListener);
removeEventListenerAll(document.querySelectorAll('a')!, 'click', linkListener);