import { mockData } from "../../shared/database/mockdata";

export class CreateTransactionService {
  execute(data: { name: string; email: string }) {
    return new Promise((resolve, reject) => {
      const user = { id: "1", name: data.name, email: data.email };
      mockData.push(user);
      resolve(user);
    });
  }
}
