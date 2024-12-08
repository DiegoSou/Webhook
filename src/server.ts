import express from 'express'
import bodyParser from 'body-parser'
import { webhookLogsRouter } from '@routes/webhookLogsRouter'
import { clientAccountsRouter } from '@routes/clientAccountsRouter'

const app = express();

app.use(express.static('src/views'));
app.use(bodyParser.json());
app.use(
    webhookLogsRouter, 
    clientAccountsRouter
)

export default app
