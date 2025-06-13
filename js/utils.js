var setEditorHeight = (editorContainer, editor) => {
  function adjustEditorHeight() {
    const lines = editor.getModel().getLineCount();
    const lineHeight = editor.getOption(monaco.editor.EditorOption.lineHeight);
    const padding = 20; // 额外的顶部和底部间距
    const newHeight = lines * lineHeight + padding; // 计算新高度

    // 设置容器的高度
    editorContainer.style.height = newHeight + "px";
    editor.layout(); // 重新布局编辑器
  }

  // 初次调整高度
  adjustEditorHeight();

  // 监听内容变化
  editor.onDidChangeModelContent(() => {
    adjustEditorHeight();
  });
};

var onCopyText = ({ copyText, confirm = window.confirm }) => {
  const baseCopy = (text) => {
    return new Promise((resolve, reject) => {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard
          .writeText(text)
          .then(resolve)
          .catch(() => reject(new Error("复制失败")));
      } else {
        try {
          const input = document.createElement("input");
          input.value = text;
          input.style.position = "absolute";
          input.style.left = "-9999px";
          input.style.top = "-9999px";
          document.body.append(input);
          input.select();
          const successful = document.execCommand("copy");
          input.remove();
          if (successful) {
            resolve();
          } else {
            reject(new Error("复制失败"));
          }
        } catch (err) {
          reject(new Error("复制失败"));
        }
      }
    });
  };

  if (copyText) {
    baseCopy(copyText)
      .then(() => confirm("复制成功", true))
      .catch(() => confirm("复制失败", false));
  }

  return { baseCopy };
};
