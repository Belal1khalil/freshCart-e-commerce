// ...existing code...
import React from 'react'

export default function ProductInfoSkeleton() {
  return (
    <section id="product-detail" className="py-10" aria-hidden="true">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Images skeleton */}
          <div id="product_images" className="lg:w-96 space-y-4">
            <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
            <div className="flex gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
              ))}
            </div>
          </div>

          {/* Product Info skeleton */}
          <div id="product-info" className="lg:w-3/5">
            <div className="bg-white rounded-lg p-6 space-y-4">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-2 w-1/2">
                  <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
                </div>
              </div>

              <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />

              <div className="flex items-center gap-3">
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>

              <div className="space-y-2">
                <div className="h-6 w-36 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>

              {/* Quantity skeleton */}
              <div className="flex items-center gap-4">
                <div className="border py-2 px-3 rounded-md border-gray-300 inline-flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="w-12 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
                <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>

              {/* Buttons skeleton */}
              <div className="flex flex-col md:flex-row gap-3">
                <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-12 w-full bg-gray-200/60 dark:bg-gray-700/60 rounded animate-pulse" />
              </div>

              {/* Info blocks skeleton */}
              <div className="border-t pt-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  <div className="space-y-1">
                    <div className="h-4 w-36 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="h-3 w-56 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  <div className="space-y-1">
                    <div className="h-4 w-36 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="h-3 w-56 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  )
}
// ...existing code...