import { DesktopNavigation } from '../navigation/DesktopNavigation';

export function Header() {
  return (
    <>
      <header className="pointer-events-none relative sticky top-0 z-50">
        <div className="top-0 z-10 flex h-16 justify-end pb-16 pr-12 pt-6 justify-center pb-24 pr-0">
          <DesktopNavigation className="pointer-events-auto block" />
        </div>
      </header>
    </>
  );
}
