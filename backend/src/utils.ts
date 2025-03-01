import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface JwtPayload {
  userId: string;
}

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword);
};

export const generateToken = (userId: string) => {
    const secret = process.env.JWT_SECRET || "abcd548wef@fdfscv";
    return jwt.sign({ userId }, secret, { expiresIn: "1h" });
  };
  
  export const verifyToken = (token: string): JwtPayload | null => {
    const secret = process.env.JWT_SECRET || "abcd548wef@fdfscv";
    try {
      return jwt.verify(token, secret) as JwtPayload;
    } catch (error) {
      return null;
    }
  };