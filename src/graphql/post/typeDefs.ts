import {gql} from 'apollo-server'
export const postTypeDefs = gql`
    type Query {
        post(id: ID!): Post!
        posts(input: FiltersInput): [Post!]!  # O nome "input" é arbitrário. Pode ser outro nome. Ex.: "filters"
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        # user: User!
        indexRef: Int!
        createdAt: String!
        unixTimestamp: String!
    }
`
