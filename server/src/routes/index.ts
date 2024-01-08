import { FastifyInstance } from "fastify";
import gameRouter from "./game.js";
import healthRouter from "./health.js";

const router = async (app: FastifyInstance) => {
    await app.register(healthRouter, { prefix: "/" })
    await app.register(gameRouter, { prefix: "/game" });
}

export default router;