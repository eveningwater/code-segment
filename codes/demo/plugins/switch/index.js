class Switch {
  constructor(options = {}) {
    this.options = {
      checked: options.checked || false,
      disabled: options.disabled || false,
      size: options.size || 'medium', // small, medium, large
      color: options.color || '#667eea', // 激活时的颜色
      label: options.label || '',
      labelPosition: options.labelPosition || 'right', // left, right
      ...options,
    };
    this.onChange = options.onChange || (() => {});
    this.checked = this.options.checked;
    this.element = this.createSwitchElement();
    this.setupEventListeners();
    
    if (options.container) {
      this.mount(options.container);
    }
  }

  createSwitchElement() {
    const container = document.createElement('div');
    container.className = 'ew-switch-container';

    // 创建 label 元素（如果提供）
    if (this.options.label) {
      const label = document.createElement('span');
      label.className = 'ew-switch-label';
      label.textContent = this.options.label;
      
      if (this.options.labelPosition === 'left') {
        container.appendChild(label);
      }
    }

    // 创建开关元素
    const switchWrapper = document.createElement('label');
    switchWrapper.className = `ew-switch ew-switch-${this.options.size}`;
    
    if (this.options.disabled) {
      switchWrapper.classList.add('ew-switch-disabled');
    }

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'ew-switch-input';
    input.checked = this.options.checked;
    input.disabled = this.options.disabled;

    const slider = document.createElement('span');
    slider.className = 'ew-switch-slider';

    switchWrapper.appendChild(input);
    switchWrapper.appendChild(slider);
    container.appendChild(switchWrapper);

    // 如果 label 在右侧，追加到容器
    if (this.options.label && this.options.labelPosition === 'right') {
      const label = container.querySelector('.ew-switch-label');
      if (label) {
        container.appendChild(label);
      }
    }

    // 设置自定义颜色
    if (this.options.color && this.options.color !== '#667eea') {
      switchWrapper.style.setProperty('--switch-active-color', this.options.color);
    }

    return container;
  }

  setupEventListeners() {
    const input = this.element.querySelector('.ew-switch-input');
    
    if (!input) return;

    input.addEventListener('change', (e) => {
      if (this.options.disabled) {
        e.preventDefault();
        return;
      }
      
      this.checked = e.target.checked;
      this.onChange(this.checked);
    });

    // 点击整个容器也会触发切换
    const switchWrapper = this.element.querySelector('.ew-switch');
    if (switchWrapper) {
      switchWrapper.addEventListener('click', (e) => {
        if (this.options.disabled) {
          e.preventDefault();
          return;
        }
        
        // 如果点击的不是 input，则手动触发
        if (e.target !== input) {
          e.preventDefault();
          input.checked = !input.checked;
          input.dispatchEvent(new Event('change'));
        }
      });
    }
  }

  setChecked(checked) {
    this.checked = checked;
    const input = this.element.querySelector('.ew-switch-input');
    if (input) {
      input.checked = checked;
    }
  }

  isChecked() {
    return this.checked;
  }

  getValue() {
    return this.checked;
  }

  setValue(value) {
    this.setChecked(value);
  }

  setDisabled(disabled) {
    this.options.disabled = disabled;
    const switchWrapper = this.element.querySelector('.ew-switch');
    const input = this.element.querySelector('.ew-switch-input');
    
    if (switchWrapper) {
      switchWrapper.classList.toggle('ew-switch-disabled', disabled);
    }
    
    if (input) {
      input.disabled = disabled;
    }
  }

  enable() {
    this.setDisabled(false);
  }

  disable() {
    this.setDisabled(true);
  }

  mount(container) {
    if (typeof container === 'string') {
      container = document.querySelector(container);
    }
    
    if (container) {
      container.appendChild(this.element);
    }
  }

  destroy() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
}

