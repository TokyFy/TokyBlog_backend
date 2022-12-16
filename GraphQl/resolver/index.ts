import {Posts} from "../../models";

const resolvers = {
    Query : {
        comments : async () => {
            return Posts.find({}).sort({date : "descending" });
        }
    },
    Mutation: {
        setComments: async (
            parent: undefined,
            args: { author: string; comment: string },
            _context: any
        ) => {
            const post = new Posts({
                author: args.author,
                comment: args.comment,
                date: Date.now(),
            });
            return await post.save();
        },
    },
};

export default resolvers;