import { mockData } from "../../shared/database/mockdata";

export class GetStatementService {
  execute(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (id) {
        resolve(`Statement for user ${id}`);
      } else {
        reject("User not found");
      }
    });
  }
}
