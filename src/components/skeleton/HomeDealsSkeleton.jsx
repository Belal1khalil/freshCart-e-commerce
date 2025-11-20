// ...existing code...
import React from 'react'

export default function HomeDealsSkeleton() {
  const items = Array.from({ length: 5 })

  return (
    <section aria-hidden="true" className="py-8">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <div className="space-y-2">
            <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="flex items-center gap-3 mt-1">
              <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="flex gap-2 items-center">
                <div className="w-10 h-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse flex items-center justify-center" />
                <span className="opacity-0">:</span>
                <div className="w-10 h-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse flex items-center justify-center" />
                <span className="opacity-0">:</span>
                <div className="w-10 h-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse flex items-center justify-center" />
              </div>
            </div>
          </div>

          <div className="h-6 w-36 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="py-6 grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {items.map((_, i) => (
            <div
              key={i}
              className="card p-4 flex flex-col items-start cursor-default rounded-xl shadow-sm bg-white"
            >
              <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
              <div className="mt-3 w-3/4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="mt-2 w-1/2 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="mt-4 w-full flex justify-between items-center gap-3">
                <div className="h-9 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-9 w-20 bg-gray-200/60 dark:bg-gray-700/60 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
// ...existing code...