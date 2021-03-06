import {gql} from 'apollo-server'

export const userTypeDefs = gql`
    extend type Query {
        user(id: ID!, teste: Boolean): User! # O '!' indica que o parâmetro é obrigatório
        users(filters: apiFiltersInput): [User!]!
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        userName: String!
        indexRef: Int!
        createdAt: String!
        # posts: [Post!]!
    }
`
