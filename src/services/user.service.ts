import { UserDto } from '../dtos/user/user.dto';
import { createHttpError } from '../utils/http-error';
import { UserRepository } from '../repositories/user.repository';

export const createUser = async (data: UserDto) => {
  const user = await UserRepository.create(data);
  if (!user) throw createHttpError(409, 'User already exists', { data });
  return user;
};

export const findAllUsers = async () => {
  return await UserRepository.findAll();
};

export const findUserById = async (id: number) => {
  const user = await UserRepository.findById(id);
  if (!user) throw createHttpError(404, 'User not found', { id });
  return user;
};

export const updateUser = async (id: number, data: UserDto) => {
  const user = await findUserById(id);
  if (!user) throw createHttpError(404, 'User not found', { id });
  const updatedUser = await UserRepository.update(id, data);
  if (!updatedUser) throw createHttpError(409, 'User already exists', { data });
  return updatedUser;
};

export const removeUser = async (id: number) => {
  const user = await findUserById(id);
  if (!user) throw createHttpError(404, 'User not found', { id });
  return await UserRepository.remove(id);
};
