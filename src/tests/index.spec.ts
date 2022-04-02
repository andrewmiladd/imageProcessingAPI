import supertest from 'supertest'
import app from '../index'
import path from 'path'
import resizeImage from '../modules/Image'

// endpoint
// functionalities

// create a request object
const request = supertest(app)

describe('Endpoints', () => {
  it('Main endpoint /', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })
  it('Image resize endpoint /api/image?name=fjord&width=250&height=250', async () => {
    const response = await request.get('/api/image?name=fjord&width=250&height=250')
    expect(response.status).toBe(200)
  })
})

describe('Image prcessing functionality', () => {
  it('should be truethy', async () => {
    expect(async () => {
      const name = 'fjord'
      const width = 500
      const height = 500
      const fullImage = path.resolve(`./public/images/full/${name}.jpg`)
      const resizedFolder = path.resolve(`./public/images/resized/`)
      const resizedImage = `${resizedFolder}/${name}_${width}_${height}.jpg`
      return await resizeImage(fullImage, resizedImage, 500, 500)
    }).toBeTruthy()
  })
})
