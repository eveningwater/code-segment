class InputNumber {
  constructor(options = {}) {
    this.options = {
      min: options.min || 0,
      max: options.max || Infinity,
      step: options.step || 1,
      value: options.value || 0,
      ...options,
    };
    this.onChange = options.onChange || (() => {});
    this.element = this.createInputElement();
    this.value = this.options.value;
    this.setupEventListeners();
  }

  createInputElement() {
    const container = document.createElement("div");
    container.className = "ew-input-number";

    const decreaseBtn = document.createElement("button");
    decreaseBtn.className = "input-number-button decrease";
    decreaseBtn.innerHTML = "-";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "input-number-input";
    input.value = this.options.value;

    const increaseBtn = document.createElement("button");
    increaseBtn.className = "input-number-button increase";
    increaseBtn.innerHTML = "+";

    container.appendChild(decreaseBtn);
    container.appendChild(input);
    container.appendChild(increaseBtn);

    return container;
  }

  setupEventListeners() {
    const input = this.element.querySelector(".input-number-input");
    const decreaseBtn = this.element.querySelector(".decrease");
    const increaseBtn = this.element.querySelector(".increase");

    input.addEventListener("input", (e) => {
      let value = parseFloat(e.target.value);
      if (isNaN(value)) {
        value = this.options.min;
      }
      this.setValue(value);
    });

    input.addEventListener("blur", () => {
      input.value = this.value;
    });

    decreaseBtn.addEventListener("click", () => {
      this.setValue(this.value - this.options.step);
    });

    increaseBtn.addEventListener("click", () => {
      this.setValue(this.value + this.options.step);
    });
  }

  setValue(value) {
    value = Math.min(Math.max(value, this.options.min), this.options.max);
    value = Math.round(value / this.options.step) * this.options.step;
    this.value = value;

    const input = this.element.querySelector(".input-number-input");
    input.value = value;
    this.onChange(value);
  }

  getValue() {
    return this.value;
  }

  mount(container) {
    if (typeof container === "string") {
      container = document.querySelector(container);
    }
    container.appendChild(this.element);
  }
}
