require.config({
    paths: { vs: '//cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs' }
});
window.MonacoEnvironment = { getWorkerUrl: () => proxy };

let proxy = URL.createObjectURL(
    new Blob(
        [
            `
          self.MonacoEnvironment = {baseUrl: '//cdn.jsdelivr.net/npm/monaco-editor@latest/min/'};
	        importScripts('//cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs/base/worker/workerMain.js');
        `
        ],
        { type: 'text/javascript' }
    )
);