// ...existing code...
import React from 'react'
import ProductCardSkeleton from './ProductCardSkeleton'

export default function FeaturedProductsSkeleton() {
  const items = Array.from({ length: 5 })

  return (
    <section aria-hidden="true" className="mb-5">
      <div className="container">
        <div className="mb-6">
          <div className="h-8 w-56 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="mt-2 h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {items.map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
// ...existing code...