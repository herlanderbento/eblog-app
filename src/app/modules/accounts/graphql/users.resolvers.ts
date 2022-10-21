import { container } from "tsyringe";
import { CreateUserUseCases } from "../use-cases/create-user-use-case";

const usersResolvers = {
  Mutation: {
    createUser: (_, { input }) => {
      const createUserUseCases = container.resolve(CreateUserUseCases);
      const user = createUserUseCases.execute(input);
      return user;
    },
  },
};

export default usersResolvers;
