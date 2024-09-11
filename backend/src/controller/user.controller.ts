/**
 * get the users from the database
 */

import prisma from "../utils/PrismaClient/prismaClient";

async function getUsers() {
    try {
      const users = await prisma.user.findMany();
      
      // Check if users array is empty
      if (users.length === 0) {
        throw new Error("No users found");
      }
  
      // Map users to remove the password field
      const usersWithoutPassword = users.map(({ password, ...userWithoutPassword }) => userWithoutPassword);
  
      return {
        message: "Users fetched successfully",
        users: usersWithoutPassword, // Return the modified users
      };
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error; // Rethrow the error for further handling
    }
  }
  

export { getUsers };
