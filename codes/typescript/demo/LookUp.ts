type LookUp<T, U> = T extends { type: U } ? T : never;
interface LookUpCat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface LookUpDog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}

type MyLookUpDog = LookUp<LookUpCat | LookUpDog, 'dog'>; // expected to be `LookUpDog`
