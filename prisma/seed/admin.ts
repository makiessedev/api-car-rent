import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const password = await hash('admin', 8)

  await prisma.user.create({
    data: {
      name: 'admin',
      email: 'admin@rent.com',
      driverLicense: 'XXX-XXX-XXX',
      password,
      isAdmin: true,
    },
  })
}

main()
  .then(async () => {
    console.log('User admin created!')
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
