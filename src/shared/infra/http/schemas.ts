import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from '@graphql-tools/merge'

import path from "path";

const mergePath = loadFilesSync(
  path.join(__dirname, "../../../app/**/graphql/*.gql")
);

const schemas = mergeTypeDefs(mergePath);

export default schemas;