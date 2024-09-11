import prisma from "../utils/PrismaClient/prismaClient";
import { Founder, User } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateToken, hashPassword } from "../utils/signup.utils";

interface FounderSignupInput extends User, Founder {}

async function signupFounder(founderInfo: FounderSignupInput) {
  const { email, password, name, ...founder } = founderInfo;
  try {
    const hashedPassword = await hashPassword(password);

    // Create the user and associated founder in the database
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        Founder: {
          create: {
            ...founder,
          },
        },
      },
      include: {
        Founder: true,
      },
    });

    if (!newUser || !newUser.Founder) {
      throw new Error("Failed to create user and founder");
    }
    
    return {
      message: "Founder account created successfully",
    };
  } catch (error) {
    console.error("Signup error:", error);
    return {
      message: "Error during signup",
    };
  }
}interface LoginInput {
  email: string;
  password: string;
}

async function loginFounder({ email, password }: LoginInput) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { Founder: true },
    });

    if (!user || !user.Founder) {
      return { message: "Invalid email or password" };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { message: "Invalid email or password" };
    }

    const token = generateToken(user.id, user.email, "Founder");
    return {
      message: "Login successful",
      token,
    };
  } catch (error) {
    console.error("Login error:", error);
    return { message: "Error during login" };
  }
}

export { signupFounder, loginFounder };