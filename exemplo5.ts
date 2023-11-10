// NonNullable<type>
// serve para remover null e/ou undefined de tipos que tem propriedades null e/ou undefined. 
type Ex5 = NonNullable<number | string[] | null | undefined>;
// nesse caso, ex5 irá ter apenas number e string[] como tipagem.
