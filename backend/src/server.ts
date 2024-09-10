

import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from 'cors'
// import session from 'express-session';

import router from "./router";

/**
 * Handles the Express server and all its routes
 */
const app: Express = express();

// Middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Use Helmet to set security-related HTTP headers
app.use(helmet());

// Disable X-Powered-By header
app.disable("x-powered-by");

// Set up rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Set up session management
// I can later do this on the specific routes
// app.use(session({
//   secret: process.env.SESSION_SECRET || 'your-secret',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     secure: true,
//     httpOnly: true
//   }
// }));

// Parse JSON request bodies
app.use(express.json());

// Handles all the routing
app.use(router)

// Catch-all route for handling 404s
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Not found" });
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

export default app;