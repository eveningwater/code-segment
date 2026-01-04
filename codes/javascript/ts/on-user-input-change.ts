const onUserInputChange = (callback: (type: string) => void) => {
    let type = 'mouse', lastTime = 0;
    const mouseMoveHandler = () => {
        const now = performance.now();
        if (now - lastTime < 20) {
            type = 'mouse';
            callback(type);
            document.removeEventListener('mousemove', mouseMoveHandler);
        }
        lastTime = now;
    }
    document.addEventListener('touchstart', () => {
        if (type === 'touch') {
            return;
        }
        type = 'touch';
        callback(type);
        document.addEventListener('mousemove', mouseMoveHandler);
    })
}

onUserInputChange(type => {
    console.log('The user is now using', type, 'as an input method.');
});