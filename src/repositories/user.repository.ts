import { AppDataSource } from '../config/data-source';
import { User } from '../entities/user.entity';

const repository = AppDataSource.getRepository(User);

export const create = (data: Partial<User>) => {
  const user = repository.create(data);
  return repository.save(user);
};

export const findById = (id: number) => {
  return repository.findOneBy({ id });
};

export const findByEmail = (email: string) => {
  return repository.findOneBy({ email });
};

export const update = async (id: number, data: Partial<User>) => {
  await repository.update(id, data);
  return findById(id);
};

export const remove = async (id: number) => {
  const user = await findById(id);
  if (user) {
    return repository.remove(user);
  }
  return null;
};
