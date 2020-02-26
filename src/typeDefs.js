import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    users: [User!]!
  }

  type User {
    id: ID!
    name: String!,
    user_id: String!
  }

  type Mutation {
    createUser(name: String!, user_id: String): User!
  }
`;
