import { User } from "./models/User";

export const resolvers = {
  Query: {
    hello: () => "hi",
    users: () => User.find()
  },
  Mutation: {
    createUser: async (_, { name, user_id }) => {
      const user = new User({ name, user_id });
      await user.save();
      return user;
    }
  }
};
