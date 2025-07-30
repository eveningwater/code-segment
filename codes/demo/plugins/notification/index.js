class Notification {
  constructor(options = {}) {
    this.options = {
      duration: options.duration || 3000,
      position: options.position || 'top-right', // top-right, top-left, bottom-right, bottom-left, top-center, bottom-center
      maxCount: options.maxCount || 5,
      zIndex: options.zIndex || 1000,
      ...options,
    };
    
    this.notifications = [];
    this.init();
  }

  init() {
    // 创建通知容器
    this.createContainer();
    this.setupStyles();
  }

  createContainer() {
    // 检查是否已存在容器
    this.container = document.querySelector('.notification-container');
    
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'notification-container';
      this.container.style.cssText = `
        position: fixed;
        z-index: ${this.options.zIndex};
        pointer-events: none;
        ${this.getPositionStyles()}
      `;
      document.body.appendChild(this.container);
    }
  }

  getPositionStyles() {
    const positions = {
      'top-right': 'top: 20px; right: 20px;',
      'top-left': 'top: 20px; left: 20px;',
      'bottom-right': 'bottom: 20px; right: 20px;',
      'bottom-left': 'bottom: 20px; left: 20px;',
      'top-center': 'top: 20px; left: 50%; transform: translateX(-50%);',
      'bottom-center': 'bottom: 20px; left: 50%; transform: translateX(-50%);'
    };
    
    return positions[this.options.position] || positions['top-right'];
  }

  setupStyles() {
    // 检查是否已添加样式
    if (document.querySelector('#notification-styles')) {
      return;
    }

    // 创建样式链接
    const link = document.createElement('link');
    link.id = 'notification-styles';
    link.rel = 'stylesheet';
    link.href = './style.css';
    
    // 如果外部样式加载失败，使用内联样式作为备用
    link.onerror = () => {
      this.setupInlineStyles();
    };
    
    document.head.appendChild(link);
  }

  setupInlineStyles() {
    const style = document.createElement('style');
    style.id = 'notification-inline-styles';
    style.textContent = `
      .notification-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 400px;
      }

      .notification-item {
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        transform: translateX(400px);
        transition: transform 0.3s ease, opacity 0.3s ease;
        opacity: 0;
        pointer-events: auto;
        position: relative;
        overflow: hidden;
        min-width: 300px;
      }

      .notification-item.show {
        transform: translateX(0);
        opacity: 1;
      }

      .notification-item.hide {
        transform: translateX(400px);
        opacity: 0;
      }

      .notification-item.success {
        background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
      }

      .notification-item.error {
        background: linear-gradient(135deg, #dc3545 0%, #e74c3c 100%);
      }

      .notification-item.warning {
        background: linear-gradient(135deg, #ffc107 0%, #fd7e14 100%);
        color: #212529;
      }

      .notification-item.info {
        background: linear-gradient(135deg, #17a2b8 0%, #4facfe 100%);
      }

      .notification-content {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 10px;
      }

      .notification-message {
        flex: 1;
        line-height: 1.4;
        word-wrap: break-word;
      }

      .notification-close {
        background: none;
        border: none;
        color: inherit;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
        transition: opacity 0.2s ease;
        flex-shrink: 0;
      }

      .notification-close:hover {
        opacity: 1;
      }

      .notification-progress {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background: rgba(255, 255, 255, 0.3);
        width: 100%;
        transform-origin: left;
        animation: notification-progress 3s linear forwards;
      }

      .notification-item.warning .notification-progress {
        background: rgba(0, 0, 0, 0.2);
      }

      @keyframes notification-progress {
        from {
          transform: scaleX(1);
        }
        to {
          transform: scaleX(0);
        }
      }

      .notification-icon {
        margin-right: 8px;
        font-size: 16px;
      }

      @media (max-width: 768px) {
        .notification-container {
          max-width: calc(100vw - 40px);
        }
        
        .notification-item {
          min-width: auto;
          max-width: 100%;
        }
      }
    `;
    
    document.head.appendChild(style);
  }

  show(message, type = 'success', options = {}) {
    const notificationOptions = {
      ...this.options,
      ...options
    };

    // 检查最大数量限制
    if (this.notifications.length >= notificationOptions.maxCount) {
      this.removeOldest();
    }

    const notification = this.createNotification(message, type, notificationOptions);
    this.notifications.push(notification);
    
    // 添加到容器
    this.container.appendChild(notification);
    
    // 显示动画
    requestAnimationFrame(() => {
      notification.classList.add('show');
    });

    // 设置自动关闭
    if (notificationOptions.duration > 0) {
      this.setupAutoClose(notification, notificationOptions.duration);
    }

    return notification;
  }

  createNotification(message, type, options) {
    const notification = document.createElement('div');
    notification.className = `notification-item ${type}`;
    
    const icons = {
      success: '✅',
      error: '❌',
      warning: '⚠️',
      info: 'ℹ️'
    };

    const content = `
      <div class="notification-content">
        <div class="notification-message">
          <span class="notification-icon">${icons[type] || icons.info}</span>
          ${message}
        </div>
        <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
      </div>
      ${options.duration > 0 ? '<div class="notification-progress"></div>' : ''}
    `;
    
    notification.innerHTML = content;
    
    // 设置进度条动画时长
    if (options.duration > 0) {
      const progress = notification.querySelector('.notification-progress');
      if (progress) {
        progress.style.animationDuration = `${options.duration}ms`;
      }
    }

    return notification;
  }

  setupAutoClose(notification, duration) {
    const timer = setTimeout(() => {
      this.hide(notification);
    }, duration);

    // 保存定时器引用，以便可以取消
    notification._timer = timer;
  }

  hide(notification) {
    if (notification._timer) {
      clearTimeout(notification._timer);
    }

    notification.classList.add('hide');
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
        this.notifications = this.notifications.filter(n => n !== notification);
      }
    }, 300);
  }

  removeOldest() {
    if (this.notifications.length > 0) {
      const oldest = this.notifications.shift();
      this.hide(oldest);
    }
  }

  clear() {
    this.notifications.forEach(notification => {
      this.hide(notification);
    });
  }

  // 便捷方法
  success(message, options = {}) {
    return this.show(message, 'success', options);
  }

  error(message, options = {}) {
    return this.show(message, 'error', options);
  }

  warning(message, options = {}) {
    return this.show(message, 'warning', options);
  }

  info(message, options = {}) {
    return this.show(message, 'info', options);
  }
} 