// Record<keys, type>
// record serve para criação de tipo de objeto, onde as chaves que forem passadas como primeiro argumento se transformarão em propriedades
// do objeto e o segundo argumento (tipo) define que cada propriedade terá esse tipo.

type Carro = {
    ano: number,
    cor: string
}

type Propriedades = 'gol' | 'palio' | 'fusca';

const carros: Record<Propriedades, Carro> = {
    gol: {
        ano: 2021,
        cor: 'branco'
    },
    palio: {
        ano: 2021,
        cor: 'branco'
    },
    fusca: {
        ano: 2021,
        cor: 'branco'
    }
}
