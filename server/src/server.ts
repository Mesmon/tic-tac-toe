import fastify from "fastify";
import router from "./routes/index.js";
import cors from '@fastify/cors'

const app = fastify();

await app.register(cors, {
  // required for running locally with frontend
  origin: '*',
})
await app.register(router);

export const startGameServer = async (port: number) => {
  await app.listen({ port, host: "0.0.0.0" });
  console.log(`Tic-Tac-Toe Server listening on port ${port}`);

  return app;
};
