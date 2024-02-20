import { Request, Response } from "express";
import { NextFunction } from "express";
import { MysqlConnector } from "../database/mysql/mysqlConnector";
import { StatusCodes } from "http-status-codes";
import { ClientsRepository } from "../../clients/clients.repository";
import { GenericError } from "../errors/GenericError.error";

const db = new ClientsRepository();
export class ClientsMiddleware {
  async isClient(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;

      const errors: string[] = [];

      if (!id) {
        errors.push("Id is required");
      } else if (id) {
        try {
          parseInt(id);
        } catch (error) {
          errors.push("Id must be a interger");
        }
      }

      if (errors.length > 0) {
        return res.status(StatusCodes.NOT_FOUND).send({ errors });
      }

      const client = await db.findUserById(parseInt(id));

      if (client) {
        next();
      } else {
        return res.status(StatusCodes.NOT_FOUND).send("Client not found");
      }
    } catch (error) {
      res
        .status(StatusCodes.NOT_FOUND)
        .send(new GenericError("Bad Request", "UnknownError"));
    }
  }
}
