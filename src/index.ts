import express, { Application, Request, Response } from 'express'
import routes from './routes'

const PORT = 3000

const application: Application = express()

application.use('/api', routes)

application.get('/', (req: Request, res: Response): void => {
  res.status(200).json({
    message: 'welcome to our application'
  })
})

application.listen(PORT, (): void => {
  // eslint-disable-next-line no-console
  console.log(`Server is starting at prot:${PORT}`)
})

export default application
