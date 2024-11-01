const IEToChrome = (url: string) =>
    new ActiveXObject('WScript.Shell').Run('chrome ' + url, 0, true);

IEToChrome(location.href);