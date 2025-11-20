// ...existing code...
import React from 'react'

export default function HomeCategoriesSkeleton() {
  const items = Array.from({ length: 6 })

  return (
    <section aria-hidden="true" className="py-8">
      <div className="container">
        <div className="flex justify-between items-center mb-4">
          <div className="space-y-2">
            <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>
          <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="grid py-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {items.map((_, i) => (
            <div
              key={i}
              className="card p-4 flex flex-col items-center justify-center cursor-default rounded-xl shadow-sm bg-white"
            >
              <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mt-3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
// ...existing code...