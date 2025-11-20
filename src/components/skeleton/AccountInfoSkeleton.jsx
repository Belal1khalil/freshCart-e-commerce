// ...existing code...
import React from 'react'

export default function AccountInfoSkeleton() {
  return (
    <section
      aria-hidden="true"
      className="p-10 space-y-5 rounded-md shadow-md max-w-[900px] bg-white"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
        <div className="space-y-2 flex-1">
          <div className="h-5 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="h-3 w-28 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="space-y-2">
          <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="space-y-2">
          <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
      </div>

      <div className="border-t-2 border-gray-200 pt-5">
        <div className="h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </div>

      {/* Optional modal skeleton (hidden placement for layout preview) */}
      <div className="relative">
        <div className="mt-6 max-w-md mx-auto space-y-3">
          <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-12 w-full bg-gray-200/60 dark:bg-gray-700/60 rounded animate-pulse" />
        </div>
      </div>
    </section>
  )
}
// ...existing code...