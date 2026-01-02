function convertImageToBase64(image) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
    return canvas.toDataURL('image/png'); // 根据需要指定输出格式
}

const showImageInConsole = src => {
    const img = new Image();
    img.setAttribute('src', src);
    document.body.appendChild(img);
    img.onload = () => {
        const base64 = convertImageToBase64(img);
        const css = [
            "padding: " + (img.height / 2 - 8) + "px " + img.width / 2 + "px;",
            "line-height: " + img.height + "px;",
            "background: url(" + base64 + ")no-repeat center / cover;",
        ];
        console.log("%c ", css.join(""));
        consoleUtil(base64);
        document.body.removeChild(img);
    }
}