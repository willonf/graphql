# Scalar types

```

import { ApolloServer, gql } from 'apollo-server';
// gql: Faz o parse da string do GraphQL
const server = new ApolloServer({
  // Query: definição das queries que podem ser buscadas no server
  typeDefs: gql`
    type Query {
      id: ID
      hello: String
      age: Int
      average: Float
      isMarried: Boolean
      isAlive: Boolean! # Non-nullable field. O retorno do resolver não pode ser nulo
      arrayString: [String]
      arrayStringNull: [String!]!
    }
  `,

  //   Resolvers: funções de retorno de dados
  resolvers: {
    Query: {
      id: () => {
        return 2; // Vai retornar a string "2"
      },

      hello: () => {
        // Deve ter o mesmo tipo de retorno definido na query
        // Pode ser assíncrona
        return 'Hello!';
      },

      age: () => {
        return 27;
      },

      average: () => {
        return 27.6;
      },

      isMarried: () => {
        return true;
      },

      isAlive: () => {
        return true;
      },

      arrayString: () => {
        return ["Will", "Lilly"];
      },

      arrayStringNull: () => {
        return [null];
      },

    },
  },
});

server.listen(4003).then((url) => {
  console.log(`Server started on ${url.url}`);
});

```

# Custom types

```
import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }
    # Definição dos custom types:
    type User {
      id: ID!
      userName: String
    }

  `,

  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'uuuid89au8isd',
          username: 'willonf',
        };
      },

      users: () => {
        return [
          {
            id: 'uuuid89au8isd',
            username: 'willonf',
          },
          {
            id: 'uuuid98u7ygrt',
            username: 'lillyf',
          },
        ];
      },
    },
  },
});

server.listen(4003).then((url) => {
  console.log(`Server started on ${url.url}`);
});


```
