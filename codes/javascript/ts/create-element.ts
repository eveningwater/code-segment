const createElement = (str: string) => {
    const element = document.createElement('div');
    element.innerHTML = str;
    return element.firstElementChild;
};

const el = createElement(
    `<div class="container">
        <p>Hello!</p>
      </div>`
);
console.log(el!.className); // 'container'