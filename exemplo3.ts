// Pick<type, keys>
// Omit<type, keys>

type Pessoa = {
    nome: string,
    idade: number,
    email: string
}

type NovoUsuario = Pick<Pessoa, 'nome' | 'idade'>;
type NovoUsuario2 = Omit<Pessoa, 'email'>

// o pick permite setar apenas o que eu quero usar do tipo Pessoa, nesse caso foi setado nome e idade.
const guido2: NovoUsuario = {
    nome: 'guido',
    idade: 32
}

// o omit permite omitir algo, nesse caso foo omitido email do tipo pessoa, então posso usar essa tipagem sem passar o email obrigatoriamente.
const guido3: NovoUsuario2 = {
    nome: 'Guido',
    idade: 32
}
