const generateRGYLight = (
  lights: {
    color: string;
    duration: number;
  }[],
  handler: (color: string) => void
) => {
  const run = () => {
    const currentActiveLight = lights.shift()!;
    //执行显示当前信号灯的函数
    handler(currentActiveLight.color);
    setTimeout(() => {
      lights.push(currentActiveLight);
      run();
    }, currentActiveLight.duration);
  };
  run();
};

const lights = [
  { color: "red", duration: 5000 },
  { color: "yellow", duration: 3000 },
  { color: "green", duration: 5000 },
];
function runLight(color) {
  console.log(color);
}
generateRGYLight(lights, runLight); //log red,5s -> log yellow,3s -> green,5s -> red ...
