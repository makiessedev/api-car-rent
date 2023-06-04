interface ICarsImagesRepository {
  create(car_id: string, images_name: string[]): Promise<void>
}

export { ICarsImagesRepository }
