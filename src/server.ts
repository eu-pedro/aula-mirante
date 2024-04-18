import { app } from "./app";
import { env } from "./env";
import { authorRoutes } from "./routes/author";

const server = app.listen(env.PORT, () => console.log('Servidor rodando...'))

app.use(authorRoutes)

process.on('SIGINT', () => {
  server.close()
  console.log('Servidor encerrado :/')
})
