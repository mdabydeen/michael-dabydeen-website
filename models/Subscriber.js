import { PrismaClient, Subscriber } from '@prisma/client'

const prisma = new PrismaClient();

export const createSubscriber = async (
  data
) => {
  const subscriber = await prisma.subscriber.create({ data });
  return subscriber
}

