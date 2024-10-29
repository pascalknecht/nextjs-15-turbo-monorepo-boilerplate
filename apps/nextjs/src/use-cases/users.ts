import prisma from "@repo/db";

export async function deleteUserUseCase(
  userId: string,
  userToDeleteId: string,
) {
  if (userId !== userToDeleteId) {
    throw new Error("You can only delete your own account");
  }

  await prisma.user.delete({
    where: {
      id: userId,
    },
  });
}
