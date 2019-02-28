const { GraphQLServer } = require('graphql-yoga');

const links = [
  {
    id: 'link-0',
    description: 'Example link',
    url: 'www.google.fr',
  },
];

const resolvers = {
  Query: {
    feed: () => links,
  },
  Mutation: {
    post: (parent, args) => {
      const { description, url } = args;
      const link = {
        id: `link-${links.length}`,
        description,
        url,
      };
      links.push(link);
      return link;
    },
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => console.log(`Server is running on port 4000`));
