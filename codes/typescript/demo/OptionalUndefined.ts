type Merge<T> = {
    [K in keyof T]: T[K]
}

type OptionalUndefined<
    T,
    Props extends keyof T = keyof T,
    OptionsProps extends keyof T = Props extends keyof T
    ? undefined extends T[Props]
    ? Props
    : never
    : never
> = Merge<
    {
        [K in OptionsProps]?: T[K];
    } & {
        [K in Exclude<keyof T, OptionsProps>]: T[K];
    }
>;

type OptionalUndefinedRes1 = OptionalUndefined<{ value: string | undefined }, 'value'>; //  { value?: string | undefined }
type OptionalUndefinedRes2 = OptionalUndefined<{ value: string; desc: string }, 'value'>; //  { value: string; desc: string }
type OptionalUndefinedRes3 = OptionalUndefined<{ value: string | undefined; desc: string }, 'value'>; //  { value?: string | undefined; desc: string }
type OptionalUndefinedRes4 = OptionalUndefined<{ value: string | undefined; desc: string | undefined }, 'value'>; //  { value?: string | undefined; desc: string | undefined }
type OptionalUndefinedRes5 = OptionalUndefined<{ value: string | undefined; desc: string }, 'value' | 'desc'>; //  { value?: string | undefined; desc: string }
type OptionalUndefinedRes6 = OptionalUndefined<{ value: string | undefined; desc: string | undefined }>; //  { value?: string | undefined; desc?: string | undefined }
type OptionalUndefinedRes7 = OptionalUndefined<{ value?: string }, 'value'>; //  { value?: string }
type OptionalUndefinedRes8 = OptionalUndefined<{ value?: string }>; //  { value?: string | undefined }