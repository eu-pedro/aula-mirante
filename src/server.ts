import { app } from "./app";
import { env } from "./env";

const server = app.listen(env.PORT, () => console.log('Servidor rodando...'))


process.on('SIGINT', () => {
  server.close()
  console.log('Servidor encerrado :/')
})