
import BestSeller from "../components/BestSeller"

import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import Newsletter from "../components/Newsletter"
import OurPollicy from "../components/OurPollicy"

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