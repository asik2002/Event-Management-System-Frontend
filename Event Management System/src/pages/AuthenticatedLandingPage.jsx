import React from 'react'
import MainNavbar from '../components/common/mainNavbar/MainNavbar'
import HeroSection from '../components/common/heroSection/HeroSection'
import RecentEvents from '../components/events/recentEvents/RecentEvents'
import UpcomingEvents from '../components/events/upcomingEvents/UpcomingEvents'

const AuthenticatedLandingPage = () => {
  return (
    <>
    <MainNavbar/>
    <HeroSection/>
    <RecentEvents/>
    <UpcomingEvents/>
    </>
  )
}

export default AuthenticatedLandingPage