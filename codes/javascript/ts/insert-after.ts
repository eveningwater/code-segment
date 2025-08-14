const insertAfter = (el: HTMLElement, html: string) =>
  el.insertAdjacentHTML("afterend", html);

insertAfter(document.getElementById("myId")!, "<p>after</p>");
// <div id="myId">...</div> <p>after</p>