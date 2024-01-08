import { FastifyInstance } from "fastify";
import {
    getGameController,
  makeMoveController,
  resetGameController,
} from "../controllers/index.js";

const gameRouter = async (app: FastifyInstance) => {
  app.route({
    method: "POST",
    url: "/reset",
    handler: resetGameController,
  });

  app.route({
    method: "POST",
    url: "/makeMove",
    handler: makeMoveController,
  });

    app.route({
        method: "GET",
        url: "/",
        handler: getGameController,
    });
};

export default gameRouter;
