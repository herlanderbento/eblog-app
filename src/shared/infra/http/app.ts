import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";

import "@shared/container";

import resolvers from "./resolvers";
import typeDefs from "./schemas";

import { connection } from "../typeorm/ormconfig";
import { router } from "./routes";
import { customError } from "@shared/errors/customError";

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

const app = express();

app.use(express.json());

connection
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    customFormatErrorFn: (error) => {
      const { message, path, locations } = error;
      return {
        message,
        path,
        locations,
      };
    },
  })
);

app.use(router);

app.use(customError);

export { app };
