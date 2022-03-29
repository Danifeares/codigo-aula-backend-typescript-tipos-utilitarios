// ReturnType<funcao>

type Ex6 = () => string;

type Ex7 = ReturnType<Ex6>;

type Ex8 = () => { nome: string }

type Ex9 = ReturnType<() => number>