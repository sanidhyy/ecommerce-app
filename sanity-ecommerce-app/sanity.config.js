import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./schemas/schema";

export default defineConfig({
  name: "default",
  title: "ecommerce-app",
  projectId: "7fvfibo0",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
