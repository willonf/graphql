import {ApolloServer} from 'apollo-server'
import {resolvers, typeDefs} from './graphql/schema'

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    // Context: objeto ou função que retorna um objeto.
    // Executada a cada requisição feita no servidor graphQL
    // Fica disponível em todos os resolvers
    context: (request) => {
        return {
            isAccessing: true,
            message: 'hi',
        }
    },
})

server.listen(4003).then((url) => {
    console.log(`Server started on ${url.url}`)
})
