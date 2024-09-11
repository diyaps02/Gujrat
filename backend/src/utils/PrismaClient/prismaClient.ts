import { PrismaClient } from "@prisma/client";
import { tryWrapper } from "../tryWrapper";

const prisma = new PrismaClient();

prisma.$extends({
  query: {
    user: {
      async create({ args, query }) {
        // checks if the user already exists

        const [user, err] = await tryWrapper(
          prisma.user.findUnique({
            where: {
              email: args.data.email,
            },
          })
        );
        if (err) {
          throw err;
        } else if (user) {
          throw new Error("User already exists");
        }
        return query(args);
      },
    },
  },
});

export default prisma;
