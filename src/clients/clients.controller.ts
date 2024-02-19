import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CreateUserBadRequest } from "./errors/CreateUserBadRequest.error";
import { GenericError } from "../shared/errors/GenericError.error";
import { GetStatementService } from "./services/getStatement.service";
import { CreateTransactionService } from "./services/createTransaciton.service";

export class ClientsController {
  public async getStatement(req: Request, res: Response): Promise<any> {
    const getStatementService = new GetStatementService();
    const id = req.params.id;
    console.log(req.params);

    if (!id) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send(new GenericError(400, "Id is required", "IdIsRequired"));
    } else {
      return getStatementService
        .execute(id)
        .then((data) => {
          res.status(StatusCodes.OK).send(data);
        })
        .catch((error) => {
          res
            .status(StatusCodes.NOT_FOUND)
            .send(new GenericError(404, error, "UserNotFound"));
        });
    }
  }

  public async createTransaction(req: Request, res: Response): Promise<any> {
    const createTransactionService = new CreateTransactionService();
    const id = req.params.id;
    const { valor, tipo, descricao } = req.body;
    const errors: string[] = [];

    if (errors.length > 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send(new CreateUserBadRequest("Fail on create user", errors));
    }
  }
}
