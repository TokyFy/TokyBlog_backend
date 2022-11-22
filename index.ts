import { ApolloServer  } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
    type Book {
        title: String
        author: String
    }
    type Query {
        books: [Book]
}`;

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },

    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

const resolvers = {
    Query: {
       books : ()=>books
    },
};

const index = new ApolloServer({
    typeDefs,
    resolvers,
});


startStandaloneServer(index , {
    listen : {
        port:4000
    }
}).then(e => {
    console.log(`Server ready at: ${e.url}`);
})
