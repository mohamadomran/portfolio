import { draftMode } from 'next/headers';

export function getPreviewToken(): string | undefined {
  return (draftMode() as { token?: string | null })?.token!;
}
