import { MysqlConnector } from "../shared/database/mysql/mysqlConnector";
import { TClient } from "./types/client.type";
import { TTransacion } from "./types/transaction.type";

const pool = new MysqlConnector();

export class ClientsRepository {
  async findUserById(id: number): Promise<TClient> {
    const query = "SELECT id ,`limit` FROM clients WHERE id = ? ;";
    const queryResult = await pool.query(query, [id]);
    if (queryResult.success) {
      return queryResult.data[0];
    } else {
      return new Promise((resolve) => resolve({} as TClient));
    }
  }

  async getTransactions(id: number): Promise<TTransacion[]> {
    const query = `
      SELECT value,type, description, created_at 
      FROM transactions 
      where client_id = ? LIMIT 10;
    `;
    const queryResult = await pool.query(query, [id]);

    if (queryResult.success) {
      return queryResult.data;
    } else {
      return [];
    }
  }
}
