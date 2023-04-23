export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const previewSecretId: `${string}.${string}` = 'preview.secret';
export const useCdn = process.env.NODE_ENV === 'production';
