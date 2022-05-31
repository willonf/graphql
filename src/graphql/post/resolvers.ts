import axios from "axios";

const post = (parent: any, arg: any, context: any, info: any) => {
    const id = "2"
    const URL = 'http://localhost:3000/posts/'.concat(id).concat("/");
    return axios.get(URL, {headers: {Accept: 'application/json'}})
};

const posts = async (parent: any, arg: any, context: any, info: any) => {
    const URL = 'http://localhost:3000/posts/';
    const {data, status} = await axios.get(URL, {
        headers: {Accept: 'application/json'},
    });

    return data;
};

export const postResolvers = {
    Query: {
        post,
        posts,
    },
};
