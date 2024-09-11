import prisma from "../utils/PrismaClient/prismaClient";
import { generateToken, hashPassword } from "../utils/signup.utils";
import bcrypt from "bcrypt"
import { Employee, User } from "@prisma/client";

interface EmployeeSignupInput extends User, Employee {}

export async function signupEmployee({
  email,
  password,
  name,
  ...employee
}: EmployeeSignupInput) {
  try {
    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        Employee: {
          create: {
            ...employee, // Employee-specific fields
          },
        },
      },
      include: {
        Employee: true,
      },
    });
    if (!newUser || !newUser.Employee) {
      throw new Error("Failed to create user and Employee");
    }
    const { password: _, ...Employee } = newUser;
    return {
      message: "Employee account created successfully",
      user: Employee
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

export async function loginEmployee({ email, password }: LoginInput) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { Employee: true },
    });

    if (!user || !user.Employee) {
      return { message: "Invalid email or password" };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { message: "Invalid email or password" };
    }

    const token = generateToken(user.id, user.email, "Employee");

    const { password: _, ...Employee } = user;
    return {
      message: "Login successful",
      token,user: Employee
    };
  } catch (error) {
    console.error("Login error:", error);
    return { message: "Error during login" };
  }
}
