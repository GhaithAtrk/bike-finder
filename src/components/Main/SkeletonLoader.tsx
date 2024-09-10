"use client";

const SkeletonLoader = () => {
  return (
    <div className="w-full rounded-md bg-gray-200">
      <div className="flex h-full flex-col items-stretch gap-4 p-4 lg:flex-row">
        <div className="rounded-md">
          <div className="skeleton-image" />
        </div>
        <div className="h-full w-full rounded-md bg-gray-100 p-2">
          <h3 className="skeleton-title mb-6"></h3>
          <p className="skeleton-subtitle my-2 pr-[10px]"></p>
          <p className="skeleton-subtitle my-2 pr-[10px]"></p>
          <p className="skeleton-subtitle my-2 pr-[10px]"></p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
