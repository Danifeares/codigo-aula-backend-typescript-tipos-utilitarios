// Record<keys, type>

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