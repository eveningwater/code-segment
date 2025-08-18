const insertBefore = (el: HTMLElement, html: string) => el.insertAdjacentHTML('beforebegin', html);

insertBefore(document.getElementById('myId')!, '<p>before</p>');
// <p>before</p> <div id="myId">...</div>