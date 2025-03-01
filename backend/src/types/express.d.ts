declare namespace Express {
    interface Request {
      body: {
        userId?: string; // Add userId property to request body
      };
    }
  }
  