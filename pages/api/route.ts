
import { PrismaClient,Post } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
        const post: Post[] = await prisma.post.findMany()
        return Response.json(post)

    }