// Exclude<unionType, excludedMembers>
// Extract<type, union>

type Ex1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
type Ex2 = Extract<'a' | 'b' | 'c', 'a'>;
type Ex3 = Exclude<boolean | string | number, number>;
type Ex4 = Extract<number | number[], number>;