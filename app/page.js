"use client"

import About from '@/components/About'
import Explore from '@/components/Explore'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import OpeningHours from '@/components/OpeningHours'
import Testimonials from '@/components/Testimonials'
import { useEffect } from 'react'


const Home = () => {

  //add locomotive scroll

  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default // Detection of elements in viewport & smooth scrolling with parallax effects.
      new LocomotiveScroll()
    }

    loadLocomotiveScroll()

  },[])

  return (
    <div className='h-full overflow-x-hidden'>
      <Hero />
      <Explore />
      <About />
      <Menu />
      <OpeningHours />
      <Testimonials />
      <div className='h-[4000px]'></div>
    </div>
  )
}

export default Home