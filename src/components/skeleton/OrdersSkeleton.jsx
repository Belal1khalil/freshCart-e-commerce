// ...existing code...
import React from 'react'

export default function OrdersSkeleton() {
  const items = Array.from({ length: 3 })

  return (
    <section aria-hidden="true" className="py-6">
      <h2 className="mb-3 text-xl font-bold">
        <span className="inline-block h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </h2>

      <div className="space-y-6">
        {items.map((_, idx) => (
          <div key={idx} className="mb-3 min-w-full overflow-hidden">
            {/* Order Header Skeleton */}
            <div className="rounded-md border border-gray-300 bg-gray-100/70 p-4">
              <div className="h-3 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse" />
              <div className="h-3 w-1/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>

            {/* Order Card Skeleton */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between rounded-md border border-gray-300 p-4 mt-3 gap-4">
              <div className="flex items-center gap-4">
                {/* Product images skeleton */}
                <div className="grid grid-flow-col gap-3">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
                </div>

                <div className="flex flex-col border-l border-gray-500 pl-4">
                  <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded mb-1 animate-pulse" />
                  <div className="h-3 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <div className="h-3 w-28 bg-gray-200 dark:bg-gray-700 rounded mb-1 animate-pulse" />
                  <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>

                <div className="flex flex-col border-r border-gray-300 pr-4">
                  <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-1 animate-pulse" />
                  <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="h-10 w-28 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-10 w-24 bg-gray-200/60 dark:bg-gray-700/60 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
// ...existing code...