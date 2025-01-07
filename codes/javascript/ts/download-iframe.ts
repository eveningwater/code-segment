const downloadIframe = (
  path: string,
  resolve: (v: string) => void,
  time = 1000
) => {
  let iframe = document.createElement("iframe");
  iframe.src = path;
  iframe.style.display = "none";
  document.body.appendChild(iframe);
  let timer: ReturnType<typeof setTimeout> | null = null;
  let handler = function () {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow!.document;
    if (["complete", "interactive"].indexOf(iframeDoc.readyState) > -1) {
      document.body.removeChild(iframe);
      if (timer) clearTimeout(timer);
      resolve("success");
    } else {
      timer = setTimeout(handler, time);
      resolve("downloading");
    }
  };
  handler();
};

downloadIframe("XXX.txt", (status) => {
  if (status === "success") {
    //下载完成之后的操作
  }
});
