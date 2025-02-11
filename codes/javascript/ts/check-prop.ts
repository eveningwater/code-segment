const checkProp =
  <T>(predicate: (...args: T[]) => boolean | undefined, prop: string) =>
  <U>(obj: U) =>
    !!predicate(obj[prop]);
const lengthIs4 = checkProp((l) => l === 4, "length");
lengthIs4([]); // false
lengthIs4([1, 2, 3, 4]); // true
lengthIs4(new Set([1, 2, 3, 4])); // false (Set uses Size, not length)

type Session = { user: { active?: boolean; disabled?: boolean } };
const session: Session = { user: {} };
const validUserSession = checkProp<Session["user"]>(
  (u) => u.active && !u.disabled,
  "user"
);

validUserSession(session); // false

session.user.active = true;
validUserSession(session); // true

const noLength = checkProp((l) => l === undefined, "length");
noLength([]); // false
noLength({}); // true
noLength(new Set()); // true
