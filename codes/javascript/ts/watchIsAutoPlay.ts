/**
 * 方法1
 * @param el 
 * @returns 
 */
// const watchIsAutoPlay = (el: HTMLAudioElement) => {
    // if (!(el instanceof HTMLAudioElement)) {
    //     throw new Error('el must be a HTMLAudioElement');
    // }
//     el.muted = true;
//     return Promise.resolve(el.play()).then(() => true).catch(() => false)
// }
/**
 * 方法2
 * @param el 
 * @returns 
 */
const watchIsAutoPlay = (el: HTMLAudioElement) => {
    if (!(el instanceof HTMLAudioElement)) {
        throw new Error('el must be a HTMLAudioElement');
    }
    const src = el.getAttribute('src');
    if (!src) {
        return Promise.resolve(false);
    }
    return new Promise<boolean>((resolve) => {
        const a = new Audio();
        a.autoplay = true;
        a.muted = true;
        a.addEventListener('play', () => resolve(true))
        a.src = src;
        resolve(false);
    });
}

const audio = document.getElementById('audio') as HTMLAudioElement;

window.onload = async () => {
    console.log(await watchIsAutoPlay(audio!))
};