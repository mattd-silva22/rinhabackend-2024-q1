import { Router } from "express";
import { AuthMiddleware } from "../shared/middleware/auth.middleware";
import { ClientsController } from "./clients.controller";

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
    this.router.post(
      "/:id/transacoes",
      this.exempleController.createTransaction
    );

    this.router.post(
      "/id/transacoes",
      this.exempleController.createTransaction
    );
    this.router.get("/:id/extrato", this.exempleController.getStatement);
  }

  public getRouter(): Router {
    return this.router;
  }
}
