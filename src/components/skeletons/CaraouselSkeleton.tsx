const SkeletonCarousel = () => {
  return (
    <div className="p-5">
      <div className="rounded-lg w-full h-[400px] relative text-white animate-pulse">
        <div className="absolute top-5 left-5 z-40 h-8 w-60 bg-neutral-700 rounded" />
        <div className="w-full h-full bg-neutral-800 rounded-lg" />
        <div className="absolute bottom-0 left-0 w-full px-5 py-4 space-y-2">
          <div className="h-6 w-1/2 bg-neutral-700 rounded" />
          <div className="h-4 w-3/4 bg-neutral-700 rounded hidden lg:block" />
          <div className="h-8 w-24 bg-neutral-600 rounded mt-2" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCarousel;