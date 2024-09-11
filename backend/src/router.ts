import { Router, Request, Response } from "express";
import { z } from "zod";
import asyncHandler from "./utils/asyncHandler";
import { getFounders, loginFounder, signupFounder } from "./controller/founder.controller";
import ApiResponse from "./utils/ApiResponse";
import { signupEmployee, loginEmployee } from "./controller/employee.controller";
import { signupIPRProfessional, loginIPRProfessional } from "./controller/ipr.controller";
import { getUsers } from "./controller/user.controller";

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



// Founder routes
router.post('/signup/founder', asyncHandler(async (req: Request, res: Response) => {
  const result = await signupFounder(req.body);
  res.status(200).json(new ApiResponse(200,result.message, result.user));
}));

router.post('/login/founder', asyncHandler(async (req: Request, res: Response) => {
  const result = await loginFounder(req.body);
  res.status(200).json({ message: result.message, token: result.token });
}));

// Employee routes
router.post('/signup/employee', asyncHandler(async (req: Request, res: Response) => {
  const result = await signupEmployee(req.body);
  res.status(200).json(new ApiResponse(200, result.message, result.user));
}));

router.post('/login/employee', asyncHandler(async (req: Request, res: Response) => {
  const result = await loginEmployee(req.body);
  res.status(200).json(new ApiResponse(200, result.message, result.user));
}));

// IPR Professional routes
router.post('/signup/ipr-professional', asyncHandler(async (req: Request, res: Response) => {
  const result = await signupIPRProfessional(req.body);
  res.status(200).json(new ApiResponse(200, result.message, result.user));
}));

router.post('/login/ipr-professional', asyncHandler(async (req: Request, res: Response) => {
  const result = await loginIPRProfessional(req.body);
  res.status(200).json(new ApiResponse(200, result.message, result.user));
}));

router.get("/founder", asyncHandler(async (req, res, next)=>{
  console.log("api hit for founders");
  const result = await getFounders();
  res.status(200).json(new ApiResponse(200, "Fetched all founders", result));
}))

router.get('/user', asyncHandler( async(req, res, next)=>{
  console.log("api hit for users");
  let result = await getUsers();
  res.status(200).json(new ApiResponse(200, result.message, result.users));
}))

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
