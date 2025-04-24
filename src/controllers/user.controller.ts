import { Request, Response, NextFunction } from 'express';
import * as UserService from '../services/user.service';

export async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const user = await UserService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}

export async function findAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const users = await UserService.findAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
}

export async function findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const user = await UserService.findUserById(Number(req.params.id));
    res.json(user);
  } catch (err) {
    next(err);
  }
}

export async function update(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const updatedUser = await UserService.updateUser(Number(req.params.id), req.body);
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    await UserService.removeUser(Number(req.params.id));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
