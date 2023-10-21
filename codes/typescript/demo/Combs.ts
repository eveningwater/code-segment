type Combs<T extends string[] = ModifierKeys> = T extends [
    infer F extends string,
    ...infer R extends string[]
]
    ? `${F} ${R[number]}` | Combs<R>
    : never;

type ModifierKeys = ['cmd', 'ctrl', 'opt', 'fn']
type CaseTypeOne = 'cmd ctrl' | 'cmd opt' | 'cmd fn' | 'ctrl opt' | 'ctrl fn' | 'opt fn';

type CombsRes = Combs<ModifierKeys>