import { Request, Response, NextFunction } from 'express';

export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
): any {
  const statusCode = err.statusCode ?? 500;
  const message = err.message ?? 'Internal Server Error';

  return res.status(statusCode).json({
    statusCode,
    message,
    additionalData: err.additionalData ?? {},
  });
}
