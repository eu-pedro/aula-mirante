import { Router } from 'express'
import { prisma } from '../../lib/prisma'

export const authorRoutes = Router()


authorRoutes.post('/author', async (request, response) => {
  const { name, email } = request.body

  const author = await prisma.author.create({
    data: {
      name,
      email,
    }
  })

  return response.status(201).send({author})
})


authorRoutes.get('/author', async (request, response) => {
  const authors = await prisma.author.findMany()


  return response.send({ authors })
})

authorRoutes.delete('/author/:id', async (request, response) => {
  const { id } = request.params

  console.log(id)

  return response.send()
})