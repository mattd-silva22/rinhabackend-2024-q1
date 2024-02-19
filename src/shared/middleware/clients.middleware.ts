import { Request, Response } from "express";
import { NextFunction } from "express";
import { MysqlConnector } from "../database/mysql/mysqlConnector";
import { StatusCodes } from "http-status-codes";
import { ClientsRepository } from "../../clients/clients.repository";

const db = new ClientsRepository();
export class ClientsMiddleware {
  async isClient(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    const errors: string[] = [];

    if (!id) {
      errors.push("Id is required");
    } else if (isNaN(parseInt(id))) {
      errors.push("Id must be a interger");
    }

    if (errors.length > 0) {
      return res.status(StatusCodes.BAD_REQUEST).send({ errors });
    }

    const client = await db.findUserById(parseInt(id));

    if (client != 0) {
      next();
    } else {
      return res.status(StatusCodes.NOT_FOUND).send("Client not found");
    }
  }
}
