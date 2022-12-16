import * as http from "http";
import * as dotenv from "dotenv";
import * as mongoose from "mongoose";
import express from "express";

dotenv.config();

import { ApolloServer } from "@apollo/server";

import {errorHandler} from "./GraphQl/errorHandler";
import cors from "cors";
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import {expressMiddleware} from "@apollo/server/express4";

import {json} from "body-parser";

import OauthRoute from "./Rest/Routes/Oauth";
import typeDefs from "./GraphQl/typedefs";
import resolvers from "./GraphQl/resolver";

const URL = process.env.DATABASE_URL!;

const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  formatError : errorHandler
});

(async () => {
  await mongoose.connect(URL, {});
  console.log("Database connected successfully 💾");

  await server.start();

  app.use(
      '/oauth',
      OauthRoute
  )

  app.use(
      '/graphql',
      cors<cors.CorsRequest>(),
      json(),
      expressMiddleware(server, {}),
  );

  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
})();