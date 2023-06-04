import { promises } from 'fs'

const deleteFile = async (filename: string) => {
  try {
    await promises.stat(filename)
  } catch {
    return
  }

  await promises.unlink(filename)
}

export { deleteFile }
