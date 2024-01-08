import config from './config/config.js'
import { startGameServer } from './server.js'

await startGameServer(config.port)