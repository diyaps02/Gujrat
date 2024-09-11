import prisma from "../utils/PrismaClient/prismaClient";
import { hashPassword } from "../utils/signup.utils";

import { Employee, User } from "@prisma/client";

interface EmployeeSignupInput extends User, Employee {}

async function signupEmployee({
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

    return {
      message: "Employee account created successfully",
    };
  } catch (error) {
    console.error("Signup error:", error);
    return {
      message: "Error during signup",
    };
  }
}
async function loginEmployee({ email, password }: LoginInput) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { employee: true },
    });

    if (!user || !user.employee) {
      return { message: "Invalid email or password" };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { message: "Invalid email or password" };
    }

    const token = generateToken(user.id, user.email, "Employee");
    return {
      message: "Login successful",
      token,
    };
  } catch (error) {
    console.error("Login error:", error);
    return { message: "Error during login" };
  }
}
