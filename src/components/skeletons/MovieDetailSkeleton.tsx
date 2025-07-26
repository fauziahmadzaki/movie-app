export const MovieDetailSkeleton = () => {
  return (
    <div className="bg-neutral-900 min-h-screen relative animate-pulse">
      <div className="absolute left-1/2 translate-1/2 w-8/10 flex top-10 h-[400px]">
        <div className="flex-1 bg-neutral-800"></div>
        <div className="flex-1 bg-neutral-700"></div>
      </div>
    </div>
  );
};
