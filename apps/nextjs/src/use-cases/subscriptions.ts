import prisma from "@repo/db";

export async function isUserSubscribed(userId: string) {
  const subscription = await prisma.subscription.findFirst({
    where: {
      userId,
    },
  });

  if (!subscription) {
    return false;
  }

  if (subscription.stripeCurrentPeriodEnd < new Date()) {
    return false;
  }

  return true;
}
