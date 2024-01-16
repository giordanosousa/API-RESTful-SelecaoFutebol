import express from "express";
import routes from './routes.js'

const app = express();

// indicar para o express ler body com Json
app.use(express.json());

// usar o router depois do app.use(expreess.json())
app.use(routes)

export default app;

