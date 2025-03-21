class Checkbox {
  constructor(options = {}) {
    this.options = {
      label: options.label || "",
      checked: options.checked || false,
      ...options,
    };
    this.onChange = options.onChange || (() => {});
    this.element = this.createCheckboxElement();
    this.checked = this.options.checked;
    this.setupEventListeners();
  }

  createCheckboxElement() {
    const container = document.createElement("div");
    container.className = "ew-checkbox";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox-input";
    checkbox.checked = this.options.checked;

    const checkmark = document.createElement("span");
    checkmark.className = "checkbox-checkmark";

    const label = document.createElement("span");
    label.className = "checkbox-label";
    label.textContent = this.options.label;

    container.appendChild(checkbox);
    container.appendChild(checkmark);
    container.appendChild(label);

    return container;
  }

  setupEventListeners() {
    const checkbox = this.element.querySelector(".checkbox-input");
    const container = this.element;

    container.addEventListener("click", (e) => {
      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
        this.checked = checkbox.checked;
        this.onChange(this.checked);
      }
    });

    checkbox.addEventListener("change", (e) => {
      this.checked = e.target.checked;
      this.onChange(this.checked);
    });
  }

  setChecked(checked) {
    this.checked = checked;
    const checkbox = this.element.querySelector(".checkbox-input");
    checkbox.checked = checked;
    this.onChange(checked);
  }

  isChecked() {
    return this.checked;
  }

  mount(container) {
    if (typeof container === "string") {
      container = document.querySelector(container);
    }
    container.appendChild(this.element);
  }

  static createCheckboxGroup(options = {}) {
    const container = document.createElement("div");
    container.className = "checkbox-group";

    const checkboxes = [];
    const allCheckbox = new Checkbox({
      label: "全选",
      onChange: (checked) => {
        checkboxes.forEach((cb) => cb.setChecked(checked));
        if (options.onChange) {
          options.onChange(checkboxes.map((cb) => cb.isChecked()));
        }
      },
    });

    allCheckbox.mount(container);

    if (options.items) {
      options.items.forEach((item) => {
        const checkbox = new Checkbox({
          ...item,
          onChange: (checked) => {
            if (options.onChange) {
              options.onChange(checkboxes.map((cb) => cb.isChecked()));
            }
            // 检查是否所有子复选框都被选中
            const allChecked = checkboxes.every((cb) => cb.isChecked());
            allCheckbox.setChecked(allChecked);
          },
        });
        checkbox.mount(container);
        checkboxes.push(checkbox);
      });
    }

    return {
      container,
      checkboxes,
      allCheckbox,
    };
  }
}
