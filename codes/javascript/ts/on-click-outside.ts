const onClickOutside = (element:HTMLElement,callback:() => void) => {
    document.addEventListener('click',e => {
        if(!element.contains(e.target as HTMLElement)){
            callback();
        }
    })
}

onClickOutside(document.querySelector('#my-element')!, () => console.log('Hello'));
// Will log 'Hello' whenever the user clicks outside of #my-element