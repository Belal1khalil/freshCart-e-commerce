// ...existing code...
import React from 'react'

export default function AccountLayoutSkeleton() {
  return (
    <section aria-hidden="true">
      <div className="container grid grid-cols-12 gap-8 py-8">
        {/* Sidebar Skeleton */}
        <aside className="col-span-12 lg:col-span-3">
          <div className="bg-white rounded-xl shadow p-5 space-y-4">
            <div className="flex items-center gap-3 pb-5 border-b">
              <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-3 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            </div>

            <nav className="mt-5 flex flex-col gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-9 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
                />
              ))}

              <div className="mt-4 h-9 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </nav>
          </div>
        </aside>

        {/* Right Content Skeleton */}
        <div className="col-span-12 lg:col-span-9 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>

            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="h-10 bg-gray-200/60 dark:bg-gray-700/60 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// ...existing code...