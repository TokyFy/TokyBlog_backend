import {GraphQLFormattedError} from "graphql/error";

const errorHandler = (formattedError : GraphQLFormattedError , error : unknown)=> {
    return {...formattedError};
}

export {errorHandler}