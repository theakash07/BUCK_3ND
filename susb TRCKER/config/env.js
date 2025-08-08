import { config } from 'dotenv';

// Use backticks for template literals
config({
  path: `.env.${process.env.NODE_ENV || 'development'}.local`
});

// Export env variables (example)
export const { PORT, NODE_ENV, DB_URI  } = process.env;



