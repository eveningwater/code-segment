| 标题                           | 标签       |
| ------------------------------ | ---------- |
| zoomingAccessibilityTips(缩放与可访问性技巧) | accessibility,metadata,head(可访问性，元数据，头) |

错误使用“viewport”元标签可能会给视力较差的人带来一些严重的可访问性问题。

最常见的、且在大多数情况下，该标签的正确设置类似于下面的第一个示例。但是，有些网站可能会执行第二个示例的操作，使用 `maximum-scale=1.0` 作为其元标签的一部分：

```html
<!-- 在大多数情况下都很好 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- 大多数情况下都很糟糕 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
```

这是一种不好的做法，因为 maximum-scale=1.0 会禁用某些移动设备上的捏合缩放功能，迫使人们以某种​​方式查看网站，并剥夺他们放大和缩小的能力。这正是你应该避免使用它的原因，让你能够满足用户的需求并提供更好的用户体验。

附带说明一下，即使你有特殊原因要应用此功能，你也应该知道，某些浏览器和设备组合（例如 Android 上的 Chrome）可能会尊重元标签的建议，而其他浏览器和设备组合（例如 iOS 10）会完全忽略该建议，因此你应该意识到你可能无法为所有用户提供一致的用户体验。