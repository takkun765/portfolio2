import { PrismaClient, Post } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  // Postテーブルから全件取得
  const todos: Post[] = await prisma.Post.findMany()
  return Response.json(posts)
}