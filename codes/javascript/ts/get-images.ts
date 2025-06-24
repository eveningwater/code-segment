const getImages = (el: HTMLElement | Document, includeDuplicates = false) => {
    const images = [...el.getElementsByTagName('img')].map(img =>
        img.getAttribute('src')
    );
    return includeDuplicates ? images : [...new Set(images)];
};
getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
getImages(document, false); // ['image1.jpg', 'image2.png', '...']