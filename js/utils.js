var setEditorHeight = (editorContainer, editor) => {
  function adjustEditorHeight() {
    const lines = editor.getModel().getLineCount();
    const lineHeight = editor.getOption(monaco.editor.EditorOption.lineHeight);
    const padding = 20; // 额外的顶部和底部间距
    const newHeight = lines * lineHeight + padding; // 计算新高度
  
    // 设置容器的高度
    editorContainer.style.height = newHeight + 'px';
    editor.layout(); // 重新布局编辑器
  }
  
  // 初次调整高度
  adjustEditorHeight();
  
  // 监听内容变化
  editor.onDidChangeModelContent(() => {
    adjustEditorHeight();
  });
}