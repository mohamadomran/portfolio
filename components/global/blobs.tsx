export const Blobs = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center -z-10">
      <div className="relative w-full max-w">
        <span className="fixed top-0 right-0 lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] bg-primary-50 rounded-full mix-blend-multiply filter blur-xl opacity-10"></span>
        <span className="fixed bottom-0 left-0 lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-10"></span>
      </div>
    </div>
  );
};
