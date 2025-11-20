import React from 'react'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import Homefeatures from '../../components/Homefeatures/Homefeatures'
import HomeCategories from '../../components/HomeCategories/HomeCategories'
import HomeDeals from '../../components/HomeDeals/HomeDeals'
import FeaturedProducts from '../../components/FeaturedProduct/FeaturedProducts'
import PageMetaData from '../../components/PageMetaData/PageMetaData'

export default function Home() {
  return (
    
    <>
    <PageMetaData title="Home - Fresh Cart" description="Welcome to Fresh Cart, your one-stop shop for fresh groceries." />
    <HomeSlider/>
    <Homefeatures/>
    <HomeCategories/>
    <HomeDeals/>
    <FeaturedProducts/>
    </>
  )
}
