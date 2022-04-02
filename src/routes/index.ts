import { Router } from 'express'
import imageRoute from './api/imageRoute'

const routes = Router()

routes.use('/image', imageRoute)

export default routes
