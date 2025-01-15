import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import Explore from '../components/Explore'
import NewsletterBox from '../components/NewsletterBox'
import Scrool from '../components/Scrool'
const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <Scrool/>
      <BestSeller />
      <Explore/>
      <OurPolicy />
     
      <NewsletterBox />
    </div>
  )
}

export default Home
