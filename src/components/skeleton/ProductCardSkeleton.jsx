// ...existing code...
import React from 'react'

export default function ProductCardSkeleton() {
  return (
    <div className="card relative bg-white shadow-lg overflow-hidden rounded-xl p-4" aria-hidden="true">
      {/* Image skeleton */}
      <div className="image">
        <div className="h-60 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
      </div>

      <div className="p-4 space-y-3">
        <div>
          <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
          <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="rating flex items-center gap-2">
          <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-4 w-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="flex justify-between items-center">
          <div className="price space-y-2">
            <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>

          <div className="h-9 w-9 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Actions skeleton (top-right) */}
      <div className="actions flex flex-col gap-3 absolute top-4 right-4">
        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
      </div>

      {/* Discount badge skeleton (optional) */}
      <div className="absolute top-4 left-4">
        <div className="h-6 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </div>
    </div>
  )
}
// ...existing code...