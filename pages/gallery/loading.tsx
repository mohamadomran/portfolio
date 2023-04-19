export default function Loading() {
  return (
    <div className="mx-auto grid grid-cols-4 gap-8 ">

      <div className="relative overflow-hidden rounded-xl px-0 py-[50%]">
        <div className="absolute left-0 top-0 h-full w-full max-w-[150%] animate-pulse bg-primary-content object-cover"></div>
      </div>
      <div className="relative overflow-hidden rounded-xl px-0 py-[50%]">
        <div className="absolute left-0 top-0 h-full w-full max-w-[150%] animate-pulse bg-primary-content object-cover"></div>
      </div>
      <div className="relative overflow-hidden rounded-xl px-0 py-[50%]">
        <div className="absolute left-0 top-0 h-full w-full max-w-[150%] animate-pulse bg-primary-content object-cover"></div>
      </div>
    </div>
  );
}
