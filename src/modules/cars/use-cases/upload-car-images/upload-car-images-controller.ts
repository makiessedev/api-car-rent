import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UploadCarsImage } from './upload-car-images'

interface IFiles {
  filename: string
}

class UploadCarImagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const image = request.files as IFiles[]

    const images_name = image.map((file) => file.filename)

    const uploadCarImage = container.resolve(UploadCarsImage)

    console.log(id)

    await uploadCarImage.execute({ car_id: id, images_name })

    return response.status(201).send()
  }
}

export const uploadCarImagesController = new UploadCarImagesController().handle
