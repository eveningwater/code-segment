var copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>`;
window.$docsify = {
  name: "code-segment 代码段",
  loadNavbar: true,
  loadNavbar: "./pages/nav.md",
  repo: "https://github.com/eveningwater/code-segment",
  loadSidebar: "./pages/sidebar.md",
  alias: {
    "/.*/sidebar.md": "pages/sidebar.md",
    "/.*/nav.md": "pages/nav.md",
  },
  coverpage: "./pages/coverpage.md",
  autoHeader: true,
  mergeNavbar: true,
  plugins: [
    (hook) => {
      var footer = [
        "<hr/>",
        "<footer>",
        `<p>
          MIT Licensed | Copyright © 2020-present&nbsp;&nbsp;<a href="https://github.com/eveningwater">eveningwater</a>&nbsp;
          Proudly published with <a href="https://github.com/docsifyjs/docsify" target="_blank">docsify</a>
        </p>
        `,
        "</footer>",
      ].join("");

      hook.afterEach(function (html) {
        return html + footer;
      });
    },
    (hook, vm) => {
      hook.beforeEach(function (html) {
        const url =
          "https://github.com/eveningwater/code-segment/blob/master/" +
          vm.route.file;
        const editHtml = "[📝 EDIT DOCUMENT](" + url + ")";
        return (
          html + "\n\n----\n" + "Last modified {docsify-updated} " + editHtml
        );
      });
      hook.afterEach(() => {
        setTimeout(() => {
          const allEditors = document.querySelectorAll(".code-editor");
          if (allEditors) {
            allEditors.forEach((editor) => {
              const dataUrl = editor.getAttribute("data-url");
              const language = editor.getAttribute("data-language");
              if (typeof axios !== "undefined") {
                axios.get(dataUrl).then((res) => {
                  require(["vs/editor/editor.main"], function () {
                    const editorInstance = monaco.editor.create(editor, {
                      value:
                        typeof res.data === "string"
                          ? res.data
                          : JSON.stringify(res.data),
                      language,
                      theme: "vs-dark",
                      readOnly: language !== "typescript",
                      scrollBeyondLastLine: false,
                      scrollbar: {
                        handleMouseWheel: false,
                      },
                      minimap: {
                        enabled: false,
                      },
                    });
                    if (language === "typescript") {
                      const copyButton = document.createElement("button");
                      copyButton.innerHTML = copyIcon;
                      copyButton.classList.add("code-editor-copy-btn");
                      copyButton.onclick = () => {
                        onCopyText({
                          copyText: editorInstance.getValue(),
                          confirm: (msg, status) => {
                            ewMessage[status ? "success" : "error"](msg);
                          },
                        });
                      };
                      editor.appendChild(copyButton);
                    }
                    setEditorHeight(editor, editorInstance);
                  });
                });
              }
            });
          }
        });
      });
    },
  ],
  search: {
    maxAge: 86400000, // 过期时间，单位毫秒，默认一天
    paths: "auto", // or 'auto'
    placeholder: "请输入需要搜索的代码段",
    noData: "No Results!",
    // 搜索标题的最大程级, 1 - 6
    depth: 6,
  },
  count: {
    countable: true,
    fontsize: "0.9em",
    color: "rgb(90,90,90)",
    language: "chinese",
  },
  externalLinks: {
    target: "_blank",
    rel: "noopener noreferrer",
  },
  markdown: {
    renderer: {
      code: function (code, lang) {
        if (lang === "tex") {
          return katex.renderToString(code, {
            throwOnError: false,
            displayMode: true,
          });
        }
        return this.origin.code.apply(this, arguments);
      },
    },
  },
};
