| 标题                             | 标签           |
| -------------------------------- | -------------- |
| system-font-stack(系统字体栈) | visual(视觉的)) |

使用操作系统的原生字体来接近原生应用的感觉。

* 使用 font-family 定义字体列表。
* 浏览器查找每个连续的字体，如果可能的话，首选第一个，如果找不到字体（在系统上或在 CSS 中定义），则回退到下一个。
* -apple-system 是旧金山，用于 iOS 和 macOS（但不是 Chrome）。
* BlinkMacSystemFont 是旧金山，用于 macOS Chrome。
* “Segoe UI”用于 Windows 10。
* Roboto 用于安卓系统。
* Oxygen-Sans 在带有 KDE 的 Linux 上使用。
* Ubuntu 用于 Ubuntu（所有变体）。
* Cantarell 在带有 GNOME Shell 的 Linux 上使用。
* 'Helvetica Neue' 和 Helvetica 用于 macOS 10.10 及更低版本。
* Arial 是一种被所有操作系统广泛支持的字体。
* 如果不支持其他字体，则无衬线字体是备用无衬线字体。

```html
<p class="system-font-stack">This text uses the system font.</p>
```

```css
.system-font-stack {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial,sans-serif;
}
```



> 应用场景

<iframe src="codes/css/html/system-font-stack.html"></iframe>




