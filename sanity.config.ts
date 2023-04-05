import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import {schemaTypes} from "./second-brain/schemas"

const config = defineConfig({
  projectId: "2gkr882k",
  dataset: "production",
  title: "Second Brain",
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemaTypes }
})

export default config
