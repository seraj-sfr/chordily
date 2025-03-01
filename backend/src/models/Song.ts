import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const Song = prisma.song;