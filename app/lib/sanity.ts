// get product data from sanity
import { createClient } from "@sanity/client";

const projectId = "k2uocgds";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});