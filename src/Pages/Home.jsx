
import BestSeller from "../Components/BestSeller"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import LatestCollection from "../Components/LatestCollection"
import Newsletter from "../Components/Newsletter"
import OurPollicy from "../Components/OurPollicy"

const Home = () => {
  return (
    <div className="bg-red-50">
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPollicy/>
      <Newsletter/>
    </div>
  )
}

export default Home