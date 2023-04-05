import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import {schemaTypes} from "./second-brain/schemas"

const config = defineConfig({
  projectId: "txd29ab2",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemaTypes }
})

export default config
