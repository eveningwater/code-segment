// 创建Modal类
class Modal {
  constructor(options = {}) {
    this.closeOnOverlayClick = options.closeOnOverlayClick ?? true;
    this.init();
  }

  init() {
    // 检查是否已存在modal结构
    this.overlay = document.querySelector(".modal-overlay");

    if (!this.overlay) {
      // 创建modal结构
      this.overlay = document.createElement("div");
      this.overlay.className = "modal-overlay";

      this.modalElement = document.createElement("div");
      this.modalElement.className = "modal";

      this.titleElement = document.createElement("div");
      this.titleElement.className = "modal-title";

      this.contentElement = document.createElement("div");
      this.contentElement.className = "modal-content";

      this.buttonsElement = document.createElement("div");
      this.buttonsElement.className = "modal-buttons";

      this.modalElement.appendChild(this.titleElement);
      this.modalElement.appendChild(this.contentElement);
      this.modalElement.appendChild(this.buttonsElement);
      this.overlay.appendChild(this.modalElement);

      document.body.appendChild(this.overlay);
    } else {
      // 使用已存在的元素
      this.modalElement = this.overlay.querySelector(".modal");
      this.titleElement = this.overlay.querySelector(".modal-title");
      this.contentElement = this.overlay.querySelector(".modal-content");
      this.buttonsElement = this.overlay.querySelector(".modal-buttons");
    }

    // 添加遮罩层点击事件
    this.overlay.addEventListener("click", (e) => {
      if (e.target === this.overlay && this.closeOnOverlayClick) {
        this.hide();
      }
    });
  }

  show(options) {
    const { title, content, type = "alert", onConfirm, onCancel } = options;

    this.titleElement.textContent = title;
    this.buttonsElement.innerHTML = "";

    if (type === "prompt") {
      const input = document.createElement("input");
      input.className = "modal-input";
      input.value = content || "";
      this.contentElement.innerHTML = "";
      this.contentElement.appendChild(input);

      const confirmBtn = document.createElement("button");
      confirmBtn.className = "modal-btn modal-btn-primary";
      confirmBtn.textContent = "确定";
      confirmBtn.onclick = () => {
        onConfirm?.(input.value);
        this.hide();
      };

      const cancelBtn = document.createElement("button");
      cancelBtn.className = "modal-btn modal-btn-default";
      cancelBtn.textContent = "关闭";
      cancelBtn.onclick = () => {
        onCancel?.();
        this.hide();
        this.buttonsElement.innerHTML = "";
      };

      this.buttonsElement.appendChild(cancelBtn);
      this.buttonsElement.appendChild(confirmBtn);

      // 自动聚焦输入框
      setTimeout(() => input.focus(), 100);
    } else {
      this.contentElement.innerHTML = content;

      const confirmBtn = document.createElement("button");
      confirmBtn.className = "modal-btn modal-btn-primary";
      confirmBtn.textContent = "确定";
      confirmBtn.onclick = () => {
        onConfirm?.();
        this.hide();
      };

      if (type === "confirm") {
        const cancelBtn = document.createElement("button");
        cancelBtn.className = "modal-btn modal-btn-default";
        cancelBtn.textContent = "取消";
        cancelBtn.onclick = () => {
          onCancel?.();
          this.hide();
        };
        this.buttonsElement.appendChild(cancelBtn);
      }

      this.buttonsElement.appendChild(confirmBtn);
    }

    this.overlay.classList.add("show");
  }

  hide() {
    this.overlay.classList.remove("show");
  }

  alert(message) {
    return new Promise((resolve) => {
      this.show({
        title: "提示",
        content: message,
        onConfirm: resolve,
      });
    });
  }

  prompt(title, defaultValue = "") {
    return new Promise((resolve) => {
      this.show({
        title,
        content: defaultValue,
        type: "prompt",
        onConfirm: resolve,
        onCancel: () => resolve(null),
      });
    });
  }

  confirm(message) {
    return new Promise((resolve) => {
      this.show({
        title: "确认",
        content: message,
        type: "confirm",
        onConfirm: () => resolve(true),
        onCancel: () => resolve(false),
      });
    });
  }
}

