import { mockData } from "../../shared/database/mockdata";

export class GetStatementService {
  execute(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      mockData.find((user) => user.id === id)
        ? resolve(mockData.find((user) => user.id === id))
        : reject("User not found");
    });
  }
}
