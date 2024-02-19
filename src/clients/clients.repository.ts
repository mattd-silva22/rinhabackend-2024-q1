import { MysqlConnector } from "../shared/database/mysql/mysqlConnector";

const pool = new MysqlConnector();

export class ClientsRepository {
  async findUserById(id: number) {
    const query = "SELECT id ,`limit` FROM clients WHERE id = ? ;";
    const queryResult = await pool.query(query, [id]);
    console.log(queryResult);
    if (queryResult.success) {
      return queryResult.data;
    } else {
      return [];
    }
  }
}
