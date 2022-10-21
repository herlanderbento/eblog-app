import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from '@graphql-tools/merge'

import path from "path";

const mergePath = loadFilesSync(
  path.join(__dirname, "../../../app/**/graphql/*.resolvers.ts")
);

const resolvers = mergeResolvers(mergePath);

export default resolvers;