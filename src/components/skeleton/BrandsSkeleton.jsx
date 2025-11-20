// ...existing code...
import React from 'react'

export default function BrandsSkeleton({ count = 8 }) {
  const items = Array.from({ length: count })

  return (
    <section aria-hidden="true" className="py-10">
      <div className="container">
        <div className="text-center mb-12">
          <div className="mx-auto h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="mx-auto mt-3 h-4 w-96 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {items.map((_, i) => (
            <div
              key={`brand-skel-${i}`}
              className="card bg-white overflow-hidden shadow-sm rounded-xl p-4 flex flex-col items-center gap-3"
              role="status"
            >
              <div className="w-full h-36 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="h-3 w-1/2 bg-gray-200/60 dark:bg-gray-700/60 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
// ...existing code...