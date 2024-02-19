import { Router } from "express";
import { AuthMiddleware } from "../shared/middleware/auth.middleware";
import { ClientsController } from "./clients.controller";
import { ClientsMiddleware } from "../shared/middleware/clients.middleware";

interface IClientsRouter {
  getRouter(): Router;
}

export class ClientsRouter implements IClientsRouter {
  private router: Router;
  private exempleController: ClientsController;

  constructor() {
    this.router = Router();
    this.exempleController = new ClientsController();
    this.setupMiddlewares();
    this.setupRoutes();
  }

  private setupMiddlewares(): void {
    const authMiddleware = new AuthMiddleware();

    this.router.use(authMiddleware.checkAuthorization);
  }

  private setupRoutes(): void {
    const clientsMiddleware = new ClientsMiddleware();
    this.router.post(
      "/:id/transacoes",
      clientsMiddleware.isClient,

      this.exempleController.createTransaction
    );

    this.router.get(
      "/:id/extrato",
      clientsMiddleware.isClient,
      this.exempleController.getStatement
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
