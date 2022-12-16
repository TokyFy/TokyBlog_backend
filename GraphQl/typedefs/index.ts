const typeDefs = `#graphql
type posts {
    id :String,
    author: String!,
    comment: String!,
    date:String
}

type Query {
    comments: [posts]
}

type Mutation {
    setComments(author:String , comment:String):posts
}
`;

export default typeDefs;