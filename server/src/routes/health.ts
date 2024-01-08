import { FastifyInstance } from "fastify";

const healthRouter = async (app:FastifyInstance) => {
    app.get("/", async () => {
        return { message: "Tic-Tac-Toe Server is running." };
      });
}

export default healthRouter;