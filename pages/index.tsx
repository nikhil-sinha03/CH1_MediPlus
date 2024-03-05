import Head from 'next/head'
import {getHomepage} from "../lib/Homepage/homepage-lib";
import Homepage from "../types/Homepage/homepage-type";
import Header from '../components/Common/header';
import HeroBanner from '../components/Homepage/hero-banner';
import AboutUs from '../components/Homepage/about-component';
import CallAction from '../components/Homepage/emergency-component';
import ServicesList from '../components/Homepage/services-listing';
import PriceListing from '../components/Homepage/pricing-Listing';


export async function getStaticProps({ preview = false}){
  const homepage = await getHomepage();
  //console.log(homepage)
  return{
      props: {homepage, preview},
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, //in seconds
  }
  
}

type Props = {
  homepage: Homepage;
}

const Homepage = ({homepage}: Props) => {
 //const homepage = allHomepage[0];

  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href='/favicon.png' />
      </Head>

      <Header header={homepage.header}/>

      <HeroBanner introBanner={homepage.introBanner}/>
      <AboutUs whoWeAre={homepage.whoWeAre} />
      <CallAction emergencyCare={homepage.emergencyCare} />
      <ServicesList servicesListing={homepage.servicesListing} />
      <PriceListing 
        pricingIntro={homepage.pricingIntro} 
        allTaxonomy_mediplusPricingServices={homepage.allTaxonomy_mediplusPricingServices} />
    </>
  )
}
export default Homepage;
