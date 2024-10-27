"use server"

import { z } from "zod"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"

const userSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
})

export async function createUser(data: z.infer<typeof userSchema>) {
  const result = userSchema.safeParse(data)
  
  if (!result.success) {
    return { error: "Invalid input data" }
  }

  try {
    // Check if the email is already in use
    const existingUser = await prisma.user.findUnique({
      where: { email: result.data.email },
    })

    if (existingUser) {
      return { error: "Email already in use" }
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(result.data.password, 10)

    // Create the user in the database
    const user = await prisma.user.create({
      data: {
        name: result.data.fullName,
        email: result.data.email,
        password: hashedPassword,
      },
    })

    // Return the user without the password
    const { password, ...userWithoutPassword } = user
    return { user: userWithoutPassword }
  } catch (error) {
    console.error("Error creating user:", error)
    return { error: "Failed to create user. Please try again." }
  }
}
