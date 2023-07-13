// @ts-ignore
type NonNullable<T> = T & {};

type NonNullableA = null | undefined | string;
type NonNullableB = NonNullable<NonNullableA>;