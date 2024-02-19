import mysql from "mysql2";
import { Pool } from "mysql2/typings/mysql/lib/Pool";

export class MysqlConnector {
  pool: Pool;

  constructor() {
    this.pool = mysql.createPool({
      host: "127.0.0.1",
      port: 3306,
      user: "rinhabackend-api",
      password: "12345",
      database: "rinhabackend",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  async query(sql: string, params: string | number[]): Promise<any> {
    return new Promise((resolve, reject) => {
      this.pool.query(sql, params, (err, results) => {
        if (err) {
          reject({ success: false, error: err });
        } else {
          resolve({ success: true, data: results });
        }
      });
    });
  }
}
