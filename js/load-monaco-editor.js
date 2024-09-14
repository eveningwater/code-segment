

if (typeof require !== 'undefined') {
  require.config({
    paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs' }
  });
  let proxy = URL.createObjectURL(
    new Blob(
      [
        `self.MonacoEnvironment = {baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/'};importScripts('https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs/base/worker/workerMain.js');`
      ],
      { type: 'text/javascript' }
    )
  );
  window.MonacoEnvironment = { getWorkerUrl: () => proxy };
}


