class Select {
  static currentOpenSelect = null;

  constructor(options = {}) {
    const { container, ...restOptions } = options;
    this.options = {
      placeholder: "请选择",
      ...restOptions,
    };
    this.onChange = options.onChange || (() => {});
    this.element = this.createSelectElement();
    if (container) {
      this.mount(container);
    }
    this.selectedValue = "";
    this.setupEventListeners();
  }

  createSelectElement() {
    const select = document.createElement("div");
    select.className = "ew-select";

    const header = document.createElement("div");
    header.className = "select-header";
    header.innerHTML = `
              <span>${this.options.placeholder}</span>
              <span class="arrow"></span>
          `;

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "select-options";

    select.appendChild(header);
    select.appendChild(optionsContainer);

    return select;
  }

  setupEventListeners() {
    const header = this.element.querySelector(".select-header");
    const optionsContainer = this.element.querySelector(".select-options");

    header.addEventListener("click", (e) => {
      e.stopPropagation();
      if (Select.currentOpenSelect && Select.currentOpenSelect !== this) {
        Select.currentOpenSelect.element.classList.remove("open");
      }
      this.element.classList.toggle("open");
      Select.currentOpenSelect = this.element.classList.contains("open")
        ? this
        : null;
    });

    document.addEventListener("click", () => {
      this.element.classList.remove("open");
      if (Select.currentOpenSelect === this) {
        Select.currentOpenSelect = null;
      }
    });

    optionsContainer.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  setOptions(options) {
    const optionsContainer = this.element.querySelector(".select-options");
    optionsContainer.innerHTML = "";

    // 保存options到实例中，以便在hover事件中使用
    this.options = options;

    // 添加普通选项
    options.forEach((option) => {
      const optionElement = document.createElement("div");
      optionElement.className = "select-option";
      optionElement.textContent = option.label || option.value;
      optionElement.addEventListener("click", () => {
        this.setValue(option.value);
        this.element.classList.remove("open");
        this.onChange(option.value);
      });
      optionsContainer.appendChild(optionElement);
    });

    // 如果存在自定义函数选项，将其添加到最后
    if (this._ewOption) {
      const ewOptionElement = document.createElement("div");
      ewOptionElement.className = "select-option";
      ewOptionElement.textContent = this._ewOption.label;
      ewOptionElement.addEventListener("click", () => {
        this._ewOption.onClick();
        this.element.classList.remove("open");
      });
      optionsContainer.appendChild(ewOptionElement);
    }
  }

  setValue(value) {
    this.selectedValue = value;
    const label = this.options.find((option) => option.value === value)?.label;
    const header = this.element.querySelector(".select-header span");
    header.textContent = label || value;
  }

  getValue() {
    return this.selectedValue;
  }

  mount(container) {
    if (typeof container === "string") {
      container = document.querySelector(container);
    }
    container.appendChild(this.element);
  }

  addewOption(label, callback) {
    const optionsContainer = this.element.querySelector(".select-options");
    const optionElement = document.createElement("div");
    optionElement.className = "select-option";
    optionElement.innerHTML = label;
    optionElement.addEventListener("click", () => {
      this.element.classList.remove("open");
      callback();
    });
    optionsContainer.appendChild(optionElement);

    // 更新options数组，添加自定义选项
    this.options.push({
      value: label,
      label: label,
      tooltip: null,
    });
  }

  onOptionHover(onHover, onLeave) {
    const optionsContainer = this.element.querySelector(".select-options");
    const options = optionsContainer.getElementsByClassName("select-option");

    Array.from(options).forEach((optionElement, index) => {
      optionElement.addEventListener("mouseenter", () => {
        if (onHover && this.options[index]) {
          const option = this.options[index];
          onHover(option, optionElement);
        }
      });

      optionElement.addEventListener("mouseleave", () => {
        if (onLeave) {
          onLeave();
        }
      });
    });
  }
}
