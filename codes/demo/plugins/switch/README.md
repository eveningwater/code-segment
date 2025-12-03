# Switch 开关切换插件

## 📋 概述

Switch 插件是一个功能完整的开关切换组件，支持多种尺寸、颜色自定义、禁用状态等功能。该插件采用面向对象的设计模式，提供了丰富的 API 和良好的用户体验。

## 🚀 快速开始

### 基础用法

```javascript
const switch1 = new Switch({
    container: '#switch1',
    onChange: (checked) => {
        console.log('开关状态:', checked);
    }
});
```

### 带标签的开关

```javascript
const switch2 = new Switch({
    container: '#switch2',
    label: '启用通知',
    labelPosition: 'right', // 或 'left'
    onChange: (checked) => {
        console.log('通知开关:', checked);
    }
});
```

## ⚙️ 配置选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `container` | String/Element | - | 容器选择器或 DOM 元素 |
| `checked` | Boolean | `false` | 初始开关状态 |
| `disabled` | Boolean | `false` | 是否禁用 |
| `size` | String | `'medium'` | 尺寸：`'small'`, `'medium'`, `'large'` |
| `color` | String | `'#667eea'` | 激活时的颜色 |
| `label` | String | `''` | 标签文本 |
| `labelPosition` | String | `'right'` | 标签位置：`'left'` 或 `'right'` |
| `onChange` | Function | `() => {}` | 状态变化回调函数 |

## 📚 API 方法

### setChecked(checked)

设置开关状态。

```javascript
switch.setChecked(true);  // 设置为开启
switch.setChecked(false); // 设置为关闭
```

### isChecked()

获取当前开关状态。

```javascript
const isChecked = switch.isChecked(); // 返回 true 或 false
```

### getValue()

获取开关值（与 `isChecked()` 相同）。

```javascript
const value = switch.getValue(); // 返回 true 或 false
```

### setValue(value)

设置开关值（与 `setChecked()` 相同）。

```javascript
switch.setValue(true);
```

### setDisabled(disabled)

设置禁用状态。

```javascript
switch.setDisabled(true);  // 禁用
switch.setDisabled(false); // 启用
```

### enable()

启用开关。

```javascript
switch.enable();
```

### disable()

禁用开关。

```javascript
switch.disable();
```

### mount(container)

将开关挂载到指定容器。

```javascript
switch.mount('#container');
// 或
switch.mount(document.getElementById('container'));
```

### destroy()

销毁开关组件。

```javascript
switch.destroy();
```

## 🎨 样式定制

### 自定义颜色

```javascript
const switch = new Switch({
    container: '#switch',
    color: '#22c55e', // 绿色
    label: 'Success'
});
```

### 不同尺寸

```javascript
// 小尺寸
const smallSwitch = new Switch({
    container: '#small',
    size: 'small'
});

// 中等尺寸（默认）
const mediumSwitch = new Switch({
    container: '#medium',
    size: 'medium'
});

// 大尺寸
const largeSwitch = new Switch({
    container: '#large',
    size: 'large'
});
```

## 💡 使用示例

### 示例 1：基础开关

```javascript
const switch1 = new Switch({
    container: '#switch1',
    onChange: (checked) => {
        console.log('开关状态:', checked);
    }
});
```

### 示例 2：带初始状态和标签

```javascript
const switch2 = new Switch({
    container: '#switch2',
    label: '启用通知',
    checked: true,
    onChange: (checked) => {
        if (checked) {
            console.log('通知已启用');
        } else {
            console.log('通知已禁用');
        }
    }
});
```

### 示例 3：左侧标签

```javascript
const switch3 = new Switch({
    container: '#switch3',
    label: '自动保存',
    labelPosition: 'left',
    onChange: (checked) => {
        console.log('自动保存:', checked);
    }
});
```

### 示例 4：自定义颜色和尺寸

```javascript
const switch4 = new Switch({
    container: '#switch4',
    label: '危险操作',
    size: 'large',
    color: '#ef4444',
    onChange: (checked) => {
        if (checked) {
            console.log('危险操作已启用');
        }
    }
});
```

### 示例 5：禁用状态

```javascript
const switch5 = new Switch({
    container: '#switch5',
    label: '已禁用',
    disabled: true,
    checked: true
});
```

### 示例 6：动态控制

```javascript
const switch6 = new Switch({
    container: '#switch6',
    label: '动态控制'
});

// 动态设置状态
switch6.setChecked(true);

// 动态禁用/启用
switch6.disable();
switch6.enable();

// 获取当前状态
const currentState = switch6.isChecked();
```

## 🎯 核心特性

- ✅ **多种尺寸**：支持 small、medium、large 三种尺寸
- ✅ **颜色自定义**：可以自定义激活状态的颜色
- ✅ **标签支持**：支持左侧或右侧标签
- ✅ **禁用状态**：支持禁用开关
- ✅ **状态管理**：提供丰富的状态管理方法
- ✅ **事件回调**：支持 onChange 回调
- ✅ **可访问性**：保持原生语义，支持键盘操作

## 📝 注意事项

1. 开关的容器会自动创建，只需要提供挂载点即可
2. `onChange` 回调会在状态改变时触发
3. 禁用状态下开关无法切换
4. 颜色使用 CSS 变量 `--switch-active-color` 实现，可以通过外部 CSS 覆盖

## 🔧 技术实现

- 使用原生 `<input type="checkbox">` 保持可访问性
- CSS 过渡动画提供流畅的交互体验
- 事件委托优化性能
- 模块化设计便于扩展

## 📄 许可证

本插件遵循项目统一许可证。

