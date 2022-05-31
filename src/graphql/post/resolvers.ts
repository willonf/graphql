const post = () => {
  return {
    id: '1',
    title: 'GraphQL vs. Rest',
  };
};

const posts = () => {
  return [
    {
      id: '1',
      title: 'GraphQL vs. Rest',
    },
    {
      id: '2',
      title: 'PostgreSQL vs. MySQL',
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
