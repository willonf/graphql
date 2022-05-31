import axios from 'axios';

// const user = async (parent, arg, context, info) => {
const user = async (_: any, arg: any, context: any, ___: any) => {
    console.log(context)
    const URL = 'http://localhost:3000/users/'.concat(arg.id).concat("/");
    return await axios.get(URL, {
        headers: {Accept: 'application/json'},
    });
};

const users = async (parent: any, arg: any, {isAccessing}: any, ___: any) => {
    const URL = 'http://localhost:3000/users';
    const {data, status} = await axios.get(URL, {
        headers: {Accept: 'application/json'},
    });

    return data; // Retorna uma promise, mas o GraphQL entende
};

export const userResolvers = {
    Query: {
        user,
        users,
    },
};
