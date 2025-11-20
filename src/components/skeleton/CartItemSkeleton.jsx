// ...existing code...
import React from 'react'

export default function CartItemSkeleton() {
  return (
    <div className="w-full px-2" aria-hidden="true">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-300/30 pb-4 gap-5">
        {/* Left Side: Image + Details */}
        <div className="flex items-start sm:items-center gap-4 flex-1 mt-4">
          <div className="w-20 h-20 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />

          <div className="space-y-2 flex-1 py-1">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/5 animate-pulse" />
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3 animate-pulse" />

            <div className="flex items-center gap-2 mt-2">
              <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="h-3 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
          </div>
        </div>

        {/* Right Side: Quantity + Price + Trash */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-end gap-3 sm:gap-5 w-full sm:w-auto">
          {/* Quantity Controls Skeleton */}
          <div className="flex items-center gap-2 border border-gray-200 dark:border-gray-600 px-2 py-1 rounded-md">
            <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="w-8 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>

          {/* Price Skeleton */}
          <div className="text-center sm:text-right">
            <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>

          {/* Trash Icon Skeleton */}
          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
// ...existing code...