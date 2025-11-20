// ...existing code...
import React from 'react'
import ProductCardSkeleton from './ProductCardSkeleton'

export default function OffersSkeleton({ count = 5 }) {
  const items = Array.from({ length: count })

  return (
    <section aria-hidden="true" className="py-6 mb-6">
      <div className="container">
        <div className="mb-4">
          <div className="h-8 w-56 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="mt-2 h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="py-6 grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {items.map((_, i) => (
            <ProductCardSkeleton key={`offer-skel-${i}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
// ...existing code...