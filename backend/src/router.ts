import { Router, Request, Response } from "express";
import { z } from "zod";

/**
 * Express router for handling most of the routes
 * @type {Router}
 */
const router = Router();

// Define Zod schemas for validation
/**
 * Zod schema for user registration
 */
const registerSchema = z.object({
  name: z.string().refine((value) => {
    value.trim() !== "",
      {
        message: "Name cannot be empty",
      };
  }),
  email: z.string().email(),
  password: z.string().min(8),
});

type RegisterData = z.infer<typeof registerSchema>;

router.get("/", (req, res) => {
  res.send("hello,  server is up and running");
});

// Set up input validation and sanitization
router.post("/register", (req: Request, res: Response) => {
  try {
    // Validate and sanitize input
    const validatedData: RegisterData = registerSchema.parse(req.body);

    // Process valid data
    res.json({ message: "Registration successful", data: validatedData });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
