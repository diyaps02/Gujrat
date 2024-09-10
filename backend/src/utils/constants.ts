export default {
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI || "mongodb://localhost:27017/gujrat-startup",
  JWT_SECRET: process.env.JWT_SECRET || "your-secret",
};
