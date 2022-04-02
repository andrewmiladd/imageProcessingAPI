import { Router, Request, Response } from 'express'
import resizeImage from '../../modules/Image'
import path from 'path'
import fs from 'fs'

const imageRoute = Router()

// /api/image/[]

imageRoute.get('/', async (req: Request, res: Response): Promise<void> => {
  const name = req.query.name
  const width = Number(req.query.width)
  const height = Number(req.query.height)
  // releative path , abslute path
  const fullImage = path.resolve(`./public/images/full/${name}.jpg`)
  const resizedFolder = path.resolve(`./public/images/resized/`)
  const resizedImage = `${resizedFolder}/${name}_${width}_${height}.jpg`
  // Vlidate input with messages back to user
  if (
    !name ||
    !width ||
    !height ||
    isNaN(width) ||
    isNaN(height) ||
    width <= 0 ||
    width >= 100000 ||
    height <= 0 ||
    height >= 100000
  ) {
    res.json({
      message: 'You must enter a valid name, width and height greater than 0 and less that 100000'
    })
    return
  }
  if (!fs.existsSync(fullImage)) {
    res.json({ message: 'resouces Not found' })
    return
  }
  if (!fs.existsSync(resizedFolder)) fs.mkdirSync(resizedFolder)
  if (fs.existsSync(resizedImage)) {
    res.sendFile(resizedImage)
    return
  }
  // resize
  const result = await resizeImage(fullImage, resizedImage, width, height)
  if (result) {
    // return resized image
    res.sendFile(resizedImage)
    return
  }

  res.status(500).json({ message: 'error' })
  return
})

export default imageRoute
