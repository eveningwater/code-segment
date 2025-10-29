const listenOnce = <T extends Element>(el: T, type: string, handler: EventListenerOrEventListenerObject) =>
  el.addEventListener(type, handler, { once: true });

listenOnce(document.getElementById("my-id")!, "click", () =>
  console.log("Hello world")
); // 'Hello world' will only be logged on the first click
