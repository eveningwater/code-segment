type GetComputed<TComputed> = {
    [K in keyof TComputed]: TComputed[K] extends () => infer R ? R : never;
};

type Options<TData, TComputed, TMethods> = {
    data: (this: void) => TData;
    computed: TComputed & ThisType<TData>;
    methods: TMethods & ThisType<TData & GetComputed<TComputed> & TMethods>;
};

declare function SimpleVue<TData, TComputed, TMethods>(
    options: Options<TData, TComputed, TMethods>
): TData & TComputed & TMethods;

const v = SimpleVue({
    data() {
        // @ts-expect-error
        this.firstName
        // @ts-expect-error
        this.getRandom()
        // @ts-expect-error
        this.data()

        return {
            firstName: 'Type',
            lastName: 'Challenges',
            amount: 10,
        }
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        },
    },
    methods: {
        getRandom() {
            return Math.random()
        },
        hi() {
            alert(this.amount)
            alert(this.fullName.toLowerCase())
            alert(this.getRandom())
        },
        test() {
            const fullName = this.fullName
            const cases: [typeof fullName, string] = [] as any
        },
    },
})


v.firstName;