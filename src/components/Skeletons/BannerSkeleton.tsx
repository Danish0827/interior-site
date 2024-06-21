import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Ensure this import is here

const BannerSkeleton = () => {
  return (
    <div className="h-[60vh] lg:h-[100vh] w-full">
      <Skeleton className="h-full w-full" />
    </div>
  );
};

export default BannerSkeleton;
