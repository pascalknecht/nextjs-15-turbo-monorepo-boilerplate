import { prisma } from "@/lib/prisma";

export async function getSubscription(userId: string) {
  const subscription = await prisma.subscription.findFirst({
    where: {
      userId: userId,
    },
  });

  return subscription;
}
