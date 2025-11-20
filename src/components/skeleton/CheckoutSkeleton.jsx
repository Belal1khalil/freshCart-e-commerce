// ...existing code...
import React from 'react'

export default function CheckoutSkeleton() {
  const items = Array.from({ length: 3 })

  return (
    <section aria-hidden="true" className="py-8">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-6">
          <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="mt-2 h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: Payment method & Shipping */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white shadow-sm p-6 rounded-lg">
              <div className="h-6 w-44 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />

              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-3" />
                  <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-3" />
                  <div className="space-y-2">
                    <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="grid grid-cols-2 gap-3 mt-3">
                      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping address skeleton */}
            <div className="bg-white shadow-sm p-6 rounded-lg">
              <div className="h-6 w-44 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />
              <div className="space-y-3">
                <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Order summary */}
          <aside className="lg:col-span-4">
            <div className="bg-white shadow-sm p-6 rounded-lg space-y-4">
              <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />

              <div className="max-h-48 overflow-auto space-y-3">
                {items.map((_, i) => (
                  <div
                    key={`checkout-item-skel-${i}`}
                    className="flex justify-between items-center"
                    role="status"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                      <div>
                        <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
                        <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                      </div>
                    </div>
                    <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
                <div className="flex justify-between items-center border-t pt-3">
                  <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
              </div>

              <div className="space-y-3 mt-2">
                <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-12 w-full bg-gray-200/60 dark:bg-gray-700/60 rounded animate-pulse" />
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
                <div className="h-4 w-56 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
// ...existing code...