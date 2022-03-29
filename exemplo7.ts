// Uppercase<literalType>
// Lowercase<literalType>

type TipoTransacao = 'Credito' | 'debito';

type TipoTransacaoUpper = Uppercase<TipoTransacao>;
type TipoTransacaoLower = Lowercase<TipoTransacao>;

const t1: TipoTransacaoUpper = 'CREDITO'
const t2: TipoTransacaoLower = 'credito'