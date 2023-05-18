interface ICreateUserDTO {
  id?: string
  name: string
  email: string
  avatar?: string
  password: string
  driverLicense: string
}

export { ICreateUserDTO }
