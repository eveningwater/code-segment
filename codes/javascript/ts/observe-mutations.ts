const observeMutations = (element: HTMLElement | Document,callback: (m:MutationRecord)  => void,options?: MutationObserverInit) => {
    const observer = new MutationObserver(mutations => mutations.forEach(m => callback(m)));
    observer.observe(element, Object.assign(
      {
        childList: true,
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        subtree: true,
      },
      options
    ));
    return observer;
}

const obs = observeMutations(document, console.log);
// Logs all mutations that happen on the page
obs.disconnect();
// Disconnects the observer and stops logging mutations on the page