const MovieSkeleton = () => {
  return (
    <div className="w-64 h-96 rounded-xl bg-neutral-900 animate-pulse flex flex-col relative overflow-hidden">
      <div className="h-2/3 w-full bg-neutral-700 rounded-t-xl" />
      <div className="p-4 flex-1 flex flex-col justify-end gap-2">
        <div className="h-4 w-3/4 bg-neutral-700 rounded" />
        <div className="h-4 w-1/2 bg-neutral-700 rounded" />
        <div className="h-8 w-20 bg-neutral-700 rounded mt-2" />
      </div>
    </div>
  );
};

export default MovieSkeleton;
