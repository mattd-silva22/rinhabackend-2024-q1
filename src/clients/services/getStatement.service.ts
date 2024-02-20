import { ClientsRepository } from "../clients.repository";
import { TStetement } from "../types/statement.type";

const db = new ClientsRepository();

export class GetStatementService {
  async execute(id: string): Promise<TStetement> {
    return new Promise(async (resolve, reject) => {
      try {
        const balance = await db.findUserById(parseInt(id));
        const transactions = await db.getTransactions(parseInt(id));

        console.log(transactions);

        resolve({
          saldo: balance.balance,
          data_extrato: new Date(),
          limite: balance.limit,
          ultimas_transacoes: transactions.map((transaction) => {
            return {
              valor: transaction.value,
              tipo: transaction.type,
              descricao: transaction.description,
              realizado_em: transaction.created_at,
            };
          }),
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}
