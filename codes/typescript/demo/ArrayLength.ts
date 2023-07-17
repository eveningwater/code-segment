type ArrayLength<T extends any[]> = T['length'];

type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT'
];

type teslaLength = ArrayLength<tesla>; //  4
type spaceXLength = ArrayLength<spaceX>; //  5
