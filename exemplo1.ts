type Usuario = {
    nome: string,
    idade?: number,
    email: string
}

// tipo utilitário Required: obriga que todos os dados tipados em Usuario sejam passados.
// const cadastrarUsuario = (usuario: Required<Usuario>) => {
//     return usuario;
// }

// tipo utilitário Partial: permite que os dados sejam passados parcialmente, apenas um nome, apenas o nome e a idade, nada, etc
// const cadastrarUsuario = (usuario: Partial<Usuario>) => {
//     return usuario;
// }

// cadastrarUsuario({
//     nome: 'Guido'
// })

// Readonly seta as informações como somente leitura, não consigo alterar posteriormente o que foi setado aqui.
const guido: Readonly<Usuario> = {
    nome: 'Guido',
    email: 'guido@email.com'
}
