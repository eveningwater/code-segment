const shallowClone = <T>(obj: T) => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b