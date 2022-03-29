// Pick<type, keys>
// Omit<type, keys>

type Pessoa = {
    nome: string,
    idade: number,
    email: string
}

type NovoUsuario = Pick<Pessoa, 'nome' | 'idade'>;
type NovoUsuario2 = Omit<Pessoa, 'email'>

const guido2: NovoUsuario = {
    nome: 'guido',
    idade: 32
}

const guido3: NovoUsuario2 = {
    nome: 'Guido',
    idade: 32
}