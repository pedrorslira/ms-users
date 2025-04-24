import { AppDataSource } from '../config/data-source';
import { User } from '../entities/user.entity';

const repository = AppDataSource.getRepository(User);

export const UserRepository = {
  findById: (id: number) => {
    return repository.findOneBy({ id });
  },

  findByEmail: (email: string) => {
    return repository.findOneBy({ email });
  },

  findAll: () => {
    return repository.find();
  },

  create: async (data: Partial<User>) => {
    const isUserExists = await UserRepository.findByEmail(data.email);
    if (isUserExists) {
      return null;
    }
    const user = repository.create(data);
    return repository.save(user);
  },

  update: async (id: number, data: Partial<User>) => {
    const isUserExists = await UserRepository.findByEmail(data.email);
    if (isUserExists) {
      return null;
    }
    await repository.update(id, data);
    return UserRepository.findById(id);
  },

  remove: async (id: number) => {
    const user = await UserRepository.findById(id);
    if (user) {
      return repository.remove(user);
    }
    return null;
  },
};
