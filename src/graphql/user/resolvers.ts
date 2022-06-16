import axios from 'axios'
// const user = async (parent, arg, context, info) => {
const user = async (parent: any, arg: any, context: any, info: any) => {
    const url = 'http://localhost:3000/users/'.concat(arg.id).concat('/')
    let response = await axios.get(url, {
        headers: {
            Accept: 'application/json',
        },
    })
    return response.data
}

const users = async (parent: any, {filters}: any, {isAccessing}: any, ___: any) => {
    const apiFiltersInput = new URLSearchParams(filters);
    const URL = 'http://localhost:3000/users/' + '?' + apiFiltersInput
    const {data, status} = await axios.get(URL, {
        headers: {
            Accept: 'application/json',
        },
    })

    return data // Retorna uma promise, mas o GraphQL entende
}

export const userResolvers = {
    Query: {
        user,
        users,
    },
}
