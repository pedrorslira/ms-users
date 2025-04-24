import { Request, Response } from 'express';
import * as UserService from '../services/user.service';

export async function create(req: Request, res: Response): Promise<any> {
  try {
    const user = await UserService.create(req.body);
    return res.status(201).json(user);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}

export const findAll = async (_req: Request, res: Response): Promise<any> => {
  const users = await UserService.findAll();
  return res.json(users);
};

export async function findOne(req: Request, res: Response): Promise<any> {
  try {
    const user = await UserService.findOne(Number(req.params.id));
    return res.json(user);
  } catch (err: any) {
    return res.status(404).json({ error: err.message });
  }
}

export async function update(req: Request, res: Response): Promise<any> {
  try {
    const updatedUser = await UserService.update(Number(req.params.id), req.body);
    return res.json(updatedUser);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
}

export async function remove(req: Request, res: Response): Promise<any> {
  try {
    await UserService.remove(Number(req.params.id));
    return res.status(204).send();
  } catch (err: any) {
    return res.status(404).json({ error: err.message });
  }
}
