import { PrismaClient, Post } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  // Postテーブルから全件取得
  const posts: Post[] = await prisma.post.findMany()
  return Response.json(posts)
}