import { randomUUID } from 'node:crypto'
import multer from 'multer'
import { resolve } from 'path'

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder),
        filename: (request, file, callback) => {
          const filename = `${randomUUID()}-${file.originalname}`

          return callback(null, filename)
        },
      }),
    }
  },
}
