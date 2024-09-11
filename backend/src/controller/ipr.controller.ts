import prisma from "../utils/PrismaClient/prismaClient";
import { generateToken, hashPassword } from "../utils/signup.utils";

import { IPRProfessional, User } from "@prisma/client";

import bcrypt from "bcrypt";

interface IPRProfessionalSignupInput extends User, IPRProfessional {}

async function signupIPRProfessional({
  email,
  password,
  name,
  ...expertise
}: IPRProfessionalSignupInput) {
  try {
    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        iprProfessional: {
          create: {
            ...expertise, // IPR-specific fields
          },
        },
      },
      include: {
        iprProfessional: true,
      },
    });

    if (!newUser || !newUser.iprProfessional) {
      throw new Error("Failed to create user and IPR Professional");
    }
    const {password: _, ...IPRUser} = newUser;
    return {
      message: "IPR Professional account created successfully",
      user: IPRUser
    };
  } catch (error) {
    console.error("Signup error:", error);
    return {
      message: "Error during signup",
    };
  }
}

interface LoginInput {
  email: string;
  password: string;
}
async function loginIPRProfessional({ email, password }: LoginInput) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { iprProfessional: true },
    });

    if (!user || !user.iprProfessional) {
      return { message: "Invalid email or password" };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { message: "Invalid email or password" };
    }

    const token = generateToken(user.id, user.email, "IPRProfessional");
    const { password: _, ...userWithoutPassword } = user;
    return {
      message: "Login successful",
      token,user: userWithoutPassword
    };
  } catch (error) {
    console.error("Login error:", error);
    return { message: "Error during login" };
  }
}
export { signupIPRProfessional, loginIPRProfessional };
