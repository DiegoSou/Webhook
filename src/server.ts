import express from 'express'
import bodyParser from 'body-parser'
import { webhookDefaultRouter } from '@controllers/webhookDefaultRouter'
import { clientAccountsRouter } from '@controllers/clientAccountsRouter'


const app = express();

app.use(express.static('src/views'));
app.use(bodyParser.json());

app.use(webhookDefaultRouter)
app.use(clientAccountsRouter)

export default app
