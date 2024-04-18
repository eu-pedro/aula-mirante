import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import { usersRouter } from './routes/'

export const app = express()

app.use(usersRouter)

app.use(express.json())
app.use(cors())
app.use(logger('dev'))
