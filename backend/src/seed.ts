import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const artist = await prisma.artist.create({
    data: {
      name: 'The Beatles',
    },
  });

  const song = await prisma.song.create({
    data: {
      title: 'Hey Jude',
      artistId: artist.id,
    },
  });

  await prisma.chord.create({
    data: {
      name: 'C',
      difficulty: 'easy',
      songId: song.id,
    },
  });

  await prisma.chord.create({
    data: {
      name: 'G',
      difficulty: 'medium',
      songId: song.id,
    },
  });

  console.log('Database seeded successfully');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
