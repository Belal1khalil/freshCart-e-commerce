import React from 'react'
import CartItemSkeleton from './CartItemSkeleton'

export default function CartSkeleton() {
  const items = Array.from({ length: 3 })

  return (
    <section aria-hidden="true">
      <div className="container">
        <div className="p-6 flex flex-col lg:flex-row gap-8">
          {/* Left Section (cart list skeleton) */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            <div className="space-y-3">
              <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="h-4 w-36 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>

            <div className="mb-4 w-full bg-gray-500/20 h-0.5 my-4" />

            <div className="space-y-4">
              {items.map((_, i) => (
                <CartItemSkeleton key={i} />
              ))}
            </div>
          </div>

          {/* Right Section (summary skeleton) */}
          <div className="w-full lg:w-80 bg-white rounded-lg shadow-md p-6 h-fit">
            <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>

              <div className="flex justify-between items-center">
                <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>

              <div className="flex justify-between items-center">
                <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            </div>

            <div className="border-t border-gray-500/20 my-4 pt-3 flex justify-between font-semibold text-lg">
              <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>

            <div className="space-y-3">
              <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="h-10 w-full bg-gray-200/60 dark:bg-gray-700/60 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}