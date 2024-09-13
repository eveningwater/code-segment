const hasPrototypeObject = <T extends string,U extends unknown>(obj: Partial<Record<T, U>>, name: string) =>
    !obj.hasOwnProperty(name) && name in obj;

function Person() {};
Person.prototype.name = "夕水";
interface Person extends FunctionConstructor {
    name?: string;
}
const person: Person = new Person();
hasPrototypeObject(person, "name"); // true
hasPrototypeObject<keyof Person, Person[keyof Person]>(person, "name"); //true