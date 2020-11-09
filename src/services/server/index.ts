import express, { Application } from "express";

import { RouterHandler } from "../attach-middleware/RouterMiddlewareAttach";
import routes from "../../router";
import { CommonHandler } from "../attach-middleware/CommonMiddlewareAttach";
import commonMiddleware from "../../middlewares/commonMiddleware";
import errorMiddleware from "../../middlewares/errorMiddleware";
import { PassportHandler } from "../attach-middleware/PassportMiddlewareAttach";
import { StaticHandler } from "../attach-middleware/StaticMiddlewareAttach";
import staticMiddleware from "../../middlewares/staticMiddleware";

export default class Server {
  public app: Application;
  private commonHandler: CommonHandler;
  private router: RouterHandler;
  private staticHandler: StaticHandler;
  private errorHandler: CommonHandler;

  constructor(private dirRoot?: string) {
    this.app = express();
    this.commonHandler = new CommonHandler(commonMiddleware, this.app);
    this.router = new RouterHandler(routes, this.app);
    this.staticHandler = new StaticHandler(staticMiddleware, this.app, this.dirRoot);
    this.errorHandler = new CommonHandler(errorMiddleware, this.app);
    this.config();
  }

  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.commonHandler.apply();
    this.router.apply();
    this.staticHandler.apply();
    this.errorHandler.apply();
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${this.app.get(
          "port"
        )}`
      );
    });
  }
}
