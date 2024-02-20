export type TStetement = {
  saldo: number;
  data_extrato: Date;
  limite: number;
  ultimas_transacoes: {
    valor: number;
    tipo: string;
    descricao: string;
    realizado_em: Date;
  }[];
};
