type IsRequiredKey<T, U extends keyof T> = Pick<T, U> extends Required<Pick<T, U>> ? true : false;
type IsRequiredKeyRes1 = IsRequiredKey<{ a: number; b?: string }, 'a'>; //  true
type IsRequiredKeyRes2 = IsRequiredKey<{ a: undefined; b: string }, 'a'>; //  true
type IsRequiredKeyRes3 = IsRequiredKey<{ a: number; b?: string }, 'b'>; //  false
type IsRequiredKeyRes4 = IsRequiredKey<{ a: number; b?: string }, 'b' | 'a'>; //  false
type IsRequiredKeyRes5 = IsRequiredKey<{ a: undefined; b: undefined }, 'b' | 'a'>; //  true