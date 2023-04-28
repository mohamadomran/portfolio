import { DesktopNavigation } from '../navigation/DesktopNavigation';

export function Header() {
  return (
    <>
      <header className="pointer-events-none relative sticky top-0 z-50">
        <div className="top-0 z-10 flex h-16 justify-end justify-center pb-16 pt-6">
          <DesktopNavigation className="pointer-events-auto block" />
        </div>
      </header>
    </>
  );
}
