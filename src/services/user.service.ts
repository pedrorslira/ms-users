import { AppDataSource } from '../config/data-source';
import { User } from '../entities/user.entity';
import { UserDto } from '../dtos/user/user.dto';
import { createHttpError } from '../utils/http-error';

const userRepository = AppDataSource.getRepository(User);

export const create = async (data: UserDto) => {
  const user = userRepository.create(data);
  return await userRepository.save(user);
};

export const findAll = async () => {
  return await userRepository.find();
};

export const findOne = async (id: number) => {
  const user = await userRepository.findOneBy({ id });
  if (!user) throw createHttpError(404, 'User not found', { id });
  return user;
};

export const update = async (id: number, data: UserDto) => {
  const user = await findOne(id);
  if (!user) throw createHttpError(404, 'User not found', { id });
  Object.assign(user, data);
  return await userRepository.save(user);
};

export const remove = async (id: number) => {
  const user = await findOne(id);
  if (!user) throw createHttpError(404, 'User not found', { id });
  return await userRepository.remove(user);
};
