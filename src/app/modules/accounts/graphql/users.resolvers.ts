import { container } from "tsyringe";
import { AuthenticateUserUseCases } from "../use-cases/authenticate-user-use-cases";
import { CreateUserUseCases } from "../use-cases/create-user-use-case";
import { GetUsersUseCases } from "../use-cases/get-users.useCases";

const usersResolvers = {
  Query: {
    getAllUsers: () => {
      const getUsersUseCases = container.resolve(GetUsersUseCases);

      return getUsersUseCases.execute();
    },
  },

  Mutation: {
    createUser: (_, { input }) => {
      const createUserUseCases = container.resolve(CreateUserUseCases);

      return createUserUseCases.execute(input);
    },

    authenticateUser: (_, { input }) => {
      const authenticateUserUseCases = container.resolve(
        AuthenticateUserUseCases
      );

      return authenticateUserUseCases.execute(input);
    },
  },
};

export default usersResolvers;
