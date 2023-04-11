export function Footer() {
  return (
    <footer className="mb-8 mt-8">
      <div className="mt-12 flex flex-col items-center justify-between gap-6 ">
        <div className="flex flex-col">
          <p className="text-sm text-base-content">
            &copy; {new Date().getFullYear()} Mohamad Omran. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
