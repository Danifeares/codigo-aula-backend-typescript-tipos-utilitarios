type Usuario = {
    nome: string,
    idade?: number,
    email: string
}

// const cadastrarUsuario = (usuario: Required<Usuario>) => {
//     return usuario;
// }

// const cadastrarUsuario = (usuario: Partial<Usuario>) => {
//     return usuario;
// }

// cadastrarUsuario({
//     nome: 'Guido'
// })

const guido: Readonly<Usuario> = {
    nome: 'Guido',
    email: 'guido@email.com'
}