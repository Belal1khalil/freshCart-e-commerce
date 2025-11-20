// ...existing code...
import React from 'react'

export default function AddressSkeleton() {
  const items = Array.from({ length: 3 })

  return (
    <section aria-hidden="true" className="py-6">
      <div className="address bg-white shadow-xl rounded-lg py-8 px-4">
        {/* Header skeleton */}
        <div className="header flex justify-between items-center">
          <div className="space-y-2">
            <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-4 w-36 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>

          <div className="h-9 w-36 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-gray-200/60" />

        {/* Addresses list skeleton */}
        <div className="space-y-5">
          {items.map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
              </div>

              <div className="space-y-2 text-gray-600">
                <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-3 w-1/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Actions/footer skeleton */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-10 w-full bg-gray-200/60 dark:bg-gray-700/60 rounded animate-pulse" />
        </div>
      </div>

      {/* Optional modal / overlay skeleton for layout preview */}
      <div className="mt-8 max-w-xl mx-auto space-y-3">
        <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-12 w-full bg-gray-200/60 dark:bg-gray-700/60 rounded animate-pulse" />
      </div>
    </section>
  )
}
// ...existing code...