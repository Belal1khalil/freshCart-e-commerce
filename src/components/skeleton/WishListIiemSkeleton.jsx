// ...existing code...
import React from 'react'

export default function WishListItemSkeleton() {
  return (
    <div
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-300/30 pb-4 gap-5 mx-2"
      aria-hidden="true"
    >
      {/* Left Side: Image + Details Skeleton */}
      <div className="flex items-start sm:items-center gap-4 flex-1 mt-4">
        <div className="w-20 h-20 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />

        <div className="space-y-2 flex-1">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 animate-pulse" />
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-2/3 animate-pulse" />

          <div className="flex items-center gap-2 mt-2">
            <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-3 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>

          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mt-2" />
        </div>
      </div>

      {/* Right Side: Actions Skeleton */}
      <div className="flex justify-center items-center gap-3">
        <div className="h-10 w-36 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
      </div>
    </div>
  )
}
// ...existing code...