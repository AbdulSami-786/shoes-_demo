import {React} from 'react'
import HeroSection from '../Components/HeroSection'
import Spotlight from '../Components/Spotlight'
import ShopSection from '../Components/ShopSection'
import SoleEditSection from '../Components/Section3'
import ShoeGallery from '../Components/ShoeGallery'  
const Home = () => {
  return (
    <div>   
        <HeroSection />
        <Spotlight />
        <ShopSection/>
        <SoleEditSection/>
        <ShoeGallery/>
    </div>
  )
}   
export default Home