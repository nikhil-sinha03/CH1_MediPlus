import Header from "../Common/header-type"
import EmergencyCare from "./EmergencyCare"
import IntroBanner from "./IntroBanner"
import PricingIntro from "./PricingIntro"
import ServicesListing from "./ServicesListing"
import WhoWeAre from "./WhoWeAre"

type Homepage = {
  introBanner: IntroBanner
  whoWeAre: WhoWeAre
  emergencyCare: EmergencyCare
  servicesListing: ServicesListing
  pricingIntro: PricingIntro
  header: Header
}

export default Homepage