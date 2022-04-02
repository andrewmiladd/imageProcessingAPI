import sharp from 'sharp'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Error = {
  message: string
}
const resizeImage = async function (
  imageLocation: string,
  outputLocation: string,
  width: number,
  height: number
): Promise<boolean> {
  try {
    await sharp(imageLocation).resize(width, height).toFile(outputLocation)
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}

export default resizeImage
