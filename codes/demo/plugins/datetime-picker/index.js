class DateTimePicker {
  constructor(options = {}) {
    const { container, ...restOptions } = options;
    this.options = {
      value: options.value || '',
      min: options.min || '',
      max: options.max || '',
      placeholder: options.placeholder || '选择日期时间',
      format: options.format || 'YYYY-MM-DD HH:mm',
      ...restOptions,
    };
    this.onChange = options.onChange || (() => {});
    this.element = this.createDateTimeElement();
    this.container = null;
    this.isOpen = false;
    this.selectedDate = this.parseValue(this.options.value);
    this.hourInput = null;
    this.minuteInput = null;
    
    if (container) {
      this.mount(container);
    }
    
    this.initTimeInputs();
    this.setupEventListeners();
    this.updateDisplay();
  }

  createDateTimeElement() {
    const container = document.createElement("div");
    container.className = "ew-datetime-picker";

    // 输入显示区域
    const inputWrapper = document.createElement("div");
    inputWrapper.className = "datetime-input-wrapper";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "datetime-input";
    input.placeholder = this.options.placeholder;
    input.readOnly = true;

    const icon = document.createElement("div");
    icon.className = "datetime-icon";
    icon.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
      </svg>
    `;

    inputWrapper.appendChild(input);
    inputWrapper.appendChild(icon);

    // 下拉面板
    const panel = document.createElement("div");
    panel.className = "datetime-panel";

    // 日期选择器
    const dateSection = document.createElement("div");
    dateSection.className = "datetime-date-section";
    
    // 年月选择头部
    const header = document.createElement("div");
    header.className = "datetime-header";

    const prevBtn = document.createElement("button");
    prevBtn.className = "datetime-nav-btn prev";
    prevBtn.innerHTML = "‹";

    const monthYear = document.createElement("div");
    monthYear.className = "datetime-month-year";

    const nextBtn = document.createElement("button");
    nextBtn.className = "datetime-nav-btn next";
    nextBtn.innerHTML = "›";

    header.appendChild(prevBtn);
    header.appendChild(monthYear);
    header.appendChild(nextBtn);

    // 星期标题
    const weekHeader = document.createElement("div");
    weekHeader.className = "datetime-week-header";
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    weekDays.forEach(day => {
      const weekDay = document.createElement("div");
      weekDay.className = "datetime-week-day";
      weekDay.textContent = day;
      weekHeader.appendChild(weekDay);
    });

    // 日期网格
    const daysGrid = document.createElement("div");
    daysGrid.className = "datetime-days-grid";

    dateSection.appendChild(header);
    dateSection.appendChild(weekHeader);
    dateSection.appendChild(daysGrid);

    // 时间选择器
    const timeSection = document.createElement("div");
    timeSection.className = "datetime-time-section";

    const timeLabel = document.createElement("div");
    timeLabel.className = "datetime-time-label";
    timeLabel.textContent = "时间";

    const timeInputs = document.createElement("div");
    timeInputs.className = "datetime-time-inputs";

    // 小时
    const hourWrapper = document.createElement("div");
    hourWrapper.className = "datetime-time-wrapper";
    const hourContainer = document.createElement("div");
    hourContainer.className = "datetime-hour-container";
    const hourLabel = document.createElement("label");
    hourLabel.textContent = "时";
    hourWrapper.appendChild(hourContainer);
    hourWrapper.appendChild(hourLabel);

    // 分钟
    const minuteWrapper = document.createElement("div");
    minuteWrapper.className = "datetime-time-wrapper";
    const minuteContainer = document.createElement("div");
    minuteContainer.className = "datetime-minute-container";
    const minuteLabel = document.createElement("label");
    minuteLabel.textContent = "分";
    minuteWrapper.appendChild(minuteContainer);
    minuteWrapper.appendChild(minuteLabel);

    timeInputs.appendChild(hourWrapper);
    timeInputs.appendChild(minuteWrapper);

    timeSection.appendChild(timeLabel);
    timeSection.appendChild(timeInputs);

    // 底部按钮
    const footer = document.createElement("div");
    footer.className = "datetime-footer";

    const clearBtn = document.createElement("button");
    clearBtn.className = "datetime-btn clear";
    clearBtn.textContent = "清除";

    const todayBtn = document.createElement("button");
    todayBtn.className = "datetime-btn today";
    todayBtn.textContent = "今天";
    const confirmBtn = document.createElement("button");
    confirmBtn.className = "datetime-btn confirm";
    confirmBtn.textContent = "确定";

    footer.appendChild(clearBtn);
    footer.appendChild(todayBtn);
    footer.appendChild(confirmBtn);

    panel.appendChild(dateSection);
    panel.appendChild(timeSection);
    panel.appendChild(footer);

    container.appendChild(inputWrapper);
    container.appendChild(panel);

    return container;
  }

  initTimeInputs() {
    // 确保 InputNumber 类可用
    if (typeof InputNumber === 'undefined') {
      console.warn('InputNumber 类未找到，使用原生输入框作为备选');
      this.createFallbackTimeInputs();
      return;
    }

    // 初始化小时输入组件
    this.hourInput = new InputNumber({
      container: this.element.querySelector('.datetime-hour-container'),
      min: 0,
      max: 23,
      step: 1,
      value: 0,
      onChange: (value) => {
        this.updateTime();
      }
    });

    // 初始化分钟输入组件
    this.minuteInput = new InputNumber({
      container: this.element.querySelector('.datetime-minute-container'),
      min: 0,
      max: 59,
      step: 1,
      value: 0,
      onChange: (value) => {
        this.updateTime();
      }
    });
  }

  createFallbackTimeInputs() {
    // 备选方案：使用原生 input number
    const hourContainer = this.element.querySelector('.datetime-hour-container');
    const minuteContainer = this.element.querySelector('.datetime-minute-container');

    const hourInput = document.createElement("input");
    hourInput.type = "number";
    hourInput.className = "datetime-time-input hour";
    hourInput.min = "0";
    hourInput.max = "23";
    hourInput.value = "00";

    const minuteInput = document.createElement("input");
    minuteInput.type = "number";
    minuteInput.className = "datetime-time-input minute";
    minuteInput.min = "0";
    minuteInput.max = "59";
    minuteInput.value = "00";

    hourContainer.appendChild(hourInput);
    minuteContainer.appendChild(minuteInput);
  }

  setupEventListeners() {
    const input = this.element.querySelector(".datetime-input");
    const inputWrapper = this.element.querySelector(".datetime-input-wrapper");
    const panel = this.element.querySelector(".datetime-panel");
    const prevBtn = this.element.querySelector(".prev");
    const nextBtn = this.element.querySelector(".next");
    const daysGrid = this.element.querySelector(".datetime-days-grid");
    const clearBtn = this.element.querySelector(".clear");
    const todayBtn = this.element.querySelector(".today");
    const confirmBtn = this.element.querySelector(".confirm");

    // 打开/关闭面板
    inputWrapper.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggle();
    });

    // 防止面板内部点击关闭
    panel.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // 导航按钮
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      this.renderCalendar();
    });

    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
      this.renderCalendar();
    });

    // 日期选择
    daysGrid.addEventListener("click", (e) => {
      if (e.target.classList.contains("datetime-day") && !e.target.classList.contains("disabled")) {
        e.stopPropagation(); // 防止事件冒泡
        const day = parseInt(e.target.textContent);
        this.selectDate(day);
      }
    });

    // 时间输入（如果使用备选方案的原生输入框）
    const hourInputElement = this.element.querySelector(".hour");
    const minuteInputElement = this.element.querySelector(".minute");
    
    if (hourInputElement) {
      hourInputElement.addEventListener("input", () => {
        this.updateTime();
      });
    }

    if (minuteInputElement) {
      minuteInputElement.addEventListener("input", () => {
        this.updateTime();
      });
    }

    // 底部按钮
    clearBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.clear();
    });

    todayBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.setToday();
    });

    confirmBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.confirm();
    });

    // 点击外部关闭
    document.addEventListener("click", (e) => {
      if (!this.element.contains(e.target)) {
        this.close();
      }
    });
  }

  parseValue(value) {
    if (!value) return null;
    
    // 如果已经是 Date 对象，直接返回
    if (value instanceof Date) {
      return value;
    }
    
    // 如果是字符串，解析 YYYY-MM-DDTHH:mm 或 YYYY-MM-DD HH:mm 格式
    if (typeof value === 'string') {
      const dateStr = value.replace('T', ' ');
      const date = new Date(dateStr);
      return isNaN(date.getTime()) ? null : date;
    }
    
    return null;
  }

  formatValue(date) {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hour}:${minute}`;
  }

  formatDisplay(date) {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hour}:${minute}`;
  }

  updateDisplay() {
    const input = this.element.querySelector(".datetime-input");
    input.value = this.formatDisplay(this.selectedDate);
  }

  renderCalendar() {
    if (!this.currentDate) {
      this.currentDate = this.selectedDate ? new Date(this.selectedDate) : new Date();
    }

    const monthYear = this.element.querySelector(".datetime-month-year");
    const daysGrid = this.element.querySelector(".datetime-days-grid");

    // 更新年月显示
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    monthYear.textContent = `${year}年${month + 1}月`;

    // 清空日期网格
    daysGrid.innerHTML = '';

    // 获取当月第一天和最后一天
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay()); // 调整到周日开始

    // 生成6周的日期
    for (let week = 0; week < 6; week++) {
      for (let day = 0; day < 7; day++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + week * 7 + day);

        const dayElement = document.createElement("div");
        dayElement.className = "datetime-day";
        dayElement.textContent = currentDate.getDate();

        // 判断是否是当前月
        if (currentDate.getMonth() !== month) {
          dayElement.classList.add("other-month");
        }

        // 判断是否是今天
        const today = new Date();
        if (currentDate.toDateString() === today.toDateString()) {
          dayElement.classList.add("today");
        }

        // 判断是否是选中日期
        if (this.selectedDate && currentDate.toDateString() === this.selectedDate.toDateString()) {
          dayElement.classList.add("selected");
        }

        // 判断是否禁用
        if (this.isDateDisabled(currentDate)) {
          dayElement.classList.add("disabled");
        }

        daysGrid.appendChild(dayElement);
      }
    }
  }

  isDateDisabled(date) {
    if (this.options.min) {
      const minDate = new Date(this.options.min);
      if (date < minDate) return true;
    }
    if (this.options.max) {
      const maxDate = new Date(this.options.max);
      if (date > maxDate) return true;
    }
    return false;
  }

  selectDate(day) {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    if (!this.selectedDate) {
      this.selectedDate = new Date();
    }
    
    this.selectedDate.setFullYear(year);
    this.selectedDate.setMonth(month);
    this.selectedDate.setDate(day);
    
    // 只更新日历显示和时间输入，不关闭面板
    this.renderCalendar();
    this.updateTimeInputs();
    
    // 更新输入框显示但不触发onChange
    this.updateDisplay();
  }

  updateTime() {
    if (!this.selectedDate) {
      this.selectedDate = new Date();
    }
    
    let hour = 0;
    let minute = 0;
    
    // 如果使用自定义 InputNumber 组件
    if (this.hourInput && this.minuteInput) {
      hour = this.hourInput.getValue();
      minute = this.minuteInput.getValue();
    } else {
      // 备选方案：使用原生输入框
      const hourInput = this.element.querySelector(".hour");
      const minuteInput = this.element.querySelector(".minute");
      
      if (hourInput && minuteInput) {
        hour = parseInt(hourInput.value) || 0;
        minute = parseInt(minuteInput.value) || 0;
      }
    }
    
    this.selectedDate.setHours(hour);
    this.selectedDate.setMinutes(minute);
  }

  updateTimeInputs() {
    if (this.selectedDate) {
      const hour = this.selectedDate.getHours();
      const minute = this.selectedDate.getMinutes();
      
      // 如果使用自定义 InputNumber 组件
      if (this.hourInput && this.minuteInput) {
        this.hourInput.setValue(hour);
        this.minuteInput.setValue(minute);
      } else {
        // 备选方案：使用原生输入框
        const hourInput = this.element.querySelector(".hour");
        const minuteInput = this.element.querySelector(".minute");
        
        if (hourInput && minuteInput) {
          hourInput.value = String(hour).padStart(2, '0');
          minuteInput.value = String(minute).padStart(2, '0');
        }
      }
    }
  }

  clear() {
    this.selectedDate = null;
    this.updateDisplay();
    this.close();
    this.onChange(null);
  }

  setToday() {
    this.selectedDate = new Date();
    this.currentDate = new Date(this.selectedDate);
    this.renderCalendar();
    this.updateTimeInputs();
    this.updateDisplay();
    // 触发 onChange 回调
    if (this.onChange) {
      this.onChange(this.selectedDate);
    }
  }

  confirm() {
    if (this.selectedDate) {
      this.updateDisplay();
      this.close();
      // 传递 Date 对象而不是格式化的字符串
      this.onChange(this.selectedDate);
    }
  }

  open() {
    this.isOpen = true;
    this.element.classList.add("open");
    this.currentDate = this.selectedDate ? new Date(this.selectedDate) : new Date();
    this.renderCalendar();
    this.updateTimeInputs();
  }

  close() {
    this.isOpen = false;
    this.element.classList.remove("open");
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  setValue(value) {
    this.selectedDate = this.parseValue(value);
    if (this.selectedDate) {
      this.updateDisplay();
    } else {
      // 如果值为 null，清空显示
      const input = this.element.querySelector(".datetimeInput");
      if (input) {
        input.value = '';
      }
    }
    
    // 触发 onChange 回调
    if (this.onChange) {
      this.onChange(this.selectedDate);
    }
  }

  getValue() {
    return this.selectedDate;
  }

  mount(container) {
    if (typeof container === "string") {
      container = document.querySelector(container);
    }
    this.container = container;
    container.appendChild(this.element);
    
    const forName = this.options?.name || this.container?.getAttribute("name");
    if (forName) {
      this.element
        ?.querySelector(".datetime-input")
        ?.setAttribute("name", forName);
    }
  }
} 
