import express, { Request, Response } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import maintRouter from './routers/index'

dotenv.config()
const port = process.env.PORT

const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

//  Rotas
server.use(maintRouter)

server.use((req: Request, res: Response) => {
    res.render('pages/404')
})


server.listen(port, () => {console.log(`O Servidor está rodando na porta ${port}`)})

