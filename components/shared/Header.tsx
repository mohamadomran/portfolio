import { CustomPortableText } from 'components/shared/CustomPortableText';

interface HeaderProps {
  centered?: boolean;
  description?: any[];
  title?: string;
}
export function Header(props: HeaderProps) {
  const { title, description, centered = false } = props;
  if (!description && !title) {
    return null;
  }
  return (
    <div className={`font-mono ${centered ? 'text-center' : 'w-5/6'}`}>
      {/* Title */}
      {title && (
        <div className="text-3xl font-extrabold tracking-tight md:text-5xl my-8">
          {title}
        </div>
      )}
    </div>
  );
}
