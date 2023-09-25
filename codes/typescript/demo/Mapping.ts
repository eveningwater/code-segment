type Union = 'mon' | 'Tue' | 'Wed';

type Mapping<T extends Union, Value extends string> = {
    // ...
}

type Res = Mapping<Union, '周一' | '周二' | '周三'>