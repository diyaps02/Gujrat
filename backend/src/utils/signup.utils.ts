import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Helper to hash the password
async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

// Helper to generate JWT
function generateToken(userId: number, email: string, role: string): string {
  return jwt.sign(
    {
      userId,
      email,
      role,
    },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
}

export {
  hashPassword,
  generateToken,
};