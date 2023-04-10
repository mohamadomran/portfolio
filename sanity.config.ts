import { visionTool } from '@sanity/vision';
import { previewDocumentNode } from 'plugins/previewPane';
import { productionUrl } from 'plugins/productionUrl';
import { settingsPlugin, settingsStructure } from 'plugins/settings';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from '@/lib/sanity.api';
import author from '@/schemas/author';
import gallery from '@/schemas/gallery';
import post from '@/schemas/post';
import project from '@/schemas/project';
import settings from '@/schemas/settings';
import til from '@/schemas/til';

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || '';

export default defineConfig({
  basePath: '/studio',
  projectId: projectId!,
  dataset: dataset!,
  title,
  schema: {
    types: [author, post, settings, gallery, project, til],
  },
  plugins: [
    deskTool({
      structure: settingsStructure(settings),
      defaultDocumentNode: previewDocumentNode({
        apiVersion: apiVersion!,
        previewSecretId: previewSecretId!,
      }),
    }),
    settingsPlugin({ type: settings.name }),
    productionUrl({
      apiVersion,
      previewSecretId,
      types: [post.name, settings.name, project.name, til.name],
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
