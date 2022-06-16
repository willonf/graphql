import axios from 'axios'

const post = async (parent: any, arg: any, context: any, info: any) => {
    const URL = 'http://localhost:3000/posts/'.concat(arg.id).concat('/')
    const { data, status } = await axios.get(URL, {
        headers: {
            Accept: 'application/json',
        },
    })
    return data
}

const posts = async (parent: any, {filters}: any, context: any, info: any) => {
    const apiFiltersInput = new URLSearchParams(filters);
    const URL = 'http://localhost:3000/posts/' + '?' + apiFiltersInput
    const { data, status } = await axios.get(URL, {
        headers: {
            Accept: 'application/json',
        },
    })

    return data
}

export const postResolvers = {
    Query: { post, posts, },
    // Trivial resolvers. São resolvers específicos
    Post: {
        unixTimestamp: (parent: any)=> {
            const date = new Date(parent.createdAt).toLocaleString()
            return date
        }
    }
}
