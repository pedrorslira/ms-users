import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../utils/http-error';

export function validateDto(dtoClass: any) {
  return async (req: Request, _res: Response, next: NextFunction) => {
    const dtoObj = plainToInstance(dtoClass, req.body);
    const errors = await validate(dtoObj, { whitelist: true, forbidNonWhitelisted: true });

    if (errors.length > 0) {
      const messages = errors.map((e) => Object.values(e.constraints || {})).flat();
      return next(new HttpError(400, 'Validation failed', { errors: messages }));
    }

    req.body = dtoObj;
    next();
  };
}
