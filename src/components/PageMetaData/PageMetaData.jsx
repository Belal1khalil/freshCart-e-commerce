import React from 'react'

export default function PageMetaData({ title="Fresh Cart", description="Fresh Cart - Your one-stop shop for fresh groceries", keywords="groceries, fresh, fruits, vegetables, organic", author="Fresh Cart Team" }) {
  return (
   <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />

   </>

  )
}
