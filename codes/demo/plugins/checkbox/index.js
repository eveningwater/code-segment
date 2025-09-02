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
    let isUpdatingFromAll = false; // 防止递归调用的标志

    const allCheckbox = new Checkbox({
      label: "全选",
      checked: options.items ? options.items.every(item => item.checked) : false,
      onChange: (checked) => {
        if (isUpdatingFromAll) return; // 防止递归
        
        isUpdatingFromAll = true;
        checkboxes.forEach((cb) => {
          cb.setChecked(checked);
        });
        
        // 确保全选复选框本身也正确设置状态
        const allCheckboxInput = allCheckbox.element.querySelector(".checkbox-input");
        allCheckboxInput.checked = checked;
        allCheckboxInput.indeterminate = false; // 清除中间状态
        
        isUpdatingFromAll = false;
        
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
            if (isUpdatingFromAll) return; // 防止递归
            
            // 更新对应的选项状态
            if (options.onChange) {
              options.onChange(checkboxes.map((cb) => cb.isChecked()));
            }
            
            // 检查是否所有子复选框都被选中
            const allChecked = checkboxes.every((cb) => cb.isChecked());
            const noneChecked = checkboxes.every((cb) => !cb.isChecked());
            
            // 更新全选checkbox的状态
            isUpdatingFromAll = true;
            allCheckbox.setChecked(allChecked);
            const allCheckboxInput = allCheckbox.element.querySelector(".checkbox-input");
            allCheckboxInput.indeterminate = !allChecked && !noneChecked;
            isUpdatingFromAll = false;
          },
        });
        checkbox.mount(container);
        checkboxes.push(checkbox);
      });
      
      // 初始化全选状态
      const allChecked = checkboxes.every((cb) => cb.isChecked());
      const noneChecked = checkboxes.every((cb) => !cb.isChecked());
      const allCheckboxInput = allCheckbox.element.querySelector(".checkbox-input");
      allCheckboxInput.indeterminate = !allChecked && !noneChecked;
    }

    return {
      container,
      checkboxes,
      allCheckbox,
      // 添加便捷方法
      setAllChecked: (checked) => {
        isUpdatingFromAll = true;
        checkboxes.forEach((cb) => {
          cb.setChecked(checked);
        });
        allCheckbox.setChecked(checked);
        
        // 确保全选复选框清除中间状态
        const allCheckboxInput = allCheckbox.element.querySelector(".checkbox-input");
        allCheckboxInput.indeterminate = false;
        
        isUpdatingFromAll = false;
        
        if (options.onChange) {
          options.onChange(checkboxes.map((cb) => cb.isChecked()));
        }
      },
      getAllChecked: () => checkboxes.map((cb) => cb.isChecked()),
      isAllChecked: () => checkboxes.every((cb) => cb.isChecked()),
      isNoneChecked: () => checkboxes.every((cb) => !cb.isChecked())
    };
  }
}
