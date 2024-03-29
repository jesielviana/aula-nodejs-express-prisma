import Prisma from '@prisma/client'
import express from 'express'

const { PrismaClient } = Prisma

const router = express.Router()
const prisma = new PrismaClient()

router.get('/', async (req, res) => {
  const todosAlunos = await prisma.aluno.findMany()
  res.json(todosAlunos)
})

router.post('/', async (req, res) => {
  const { nome, email, cursoId } = req.body
  const post = await prisma.aluno.create({
    data: {
      nome,
      email,
      Curso: { connect: { id: cursoId } }
    }
  })
  res.json(post)
})

export default router
