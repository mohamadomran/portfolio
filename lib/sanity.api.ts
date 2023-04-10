export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
};

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
export const useCdn = process.env.SANITY_REVALIDATE_SECRET
  ? false
  : process.env.NODE_ENV === 'production';

export const previewSecretId: `${string}.${string}` = 'preview.secret';
