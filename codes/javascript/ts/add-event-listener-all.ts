const addEventListenerAll = <T extends Element>(
  targets: NodeListOf<T> | HTMLCollectionOf<T> | T[],
  type: string,
  listener: (e: Event, index: number) => void,
  options: boolean | AddEventListenerOptions = false
) =>
  Array.from(targets).forEach((target, index) =>
    target.addEventListener(type, (e) => listener(e, index), options)
  );

addEventListenerAll(document.querySelectorAll("a"), "click", () =>
  console.log("Clicked a link")
);
// Logs 'Clicked a link' whenever any anchor element is clicked
