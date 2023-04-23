import { DefaultDocumentNodeResolver } from 'sanity/desk';

import { PREVIEWABLE_DOCUMENT_TYPES } from '../../sanity.config';
import { PreviewPane } from './PreviewPane';

export const previewDocumentNode = ({
  apiVersion,
  previewSecretId,
}: {
  apiVersion: string;
  previewSecretId: `${string}.${string}`;
}): DefaultDocumentNodeResolver => {
  return (S, { schemaType }) => {
    if (PREVIEWABLE_DOCUMENT_TYPES.includes(schemaType)) {
      return S.document().views([
        // Default form view
        S.view.form(),
        // Preview
        S.view
          .component((props) => (
            <PreviewPane
              previewSecretId={previewSecretId}
              apiVersion={apiVersion}
              {...props}
            />
          ))
          .title('Preview'),
      ]);
    }

    return null;
  };
};
