import Head from "next/head";
import { getAllserviceWithIds, getServiceById } from "../../lib/ServicePage/service-lib";
import Homepage from "../../types/Homepage/homepage-type";
import ServiceDetails from "../../types/Services/ServiceDetails";
import Header from "../../components/Common/header";
import ServiceDetailsData from '../../components/ServicesPage/serviceDetailspage';
import { getHomepage } from "../../lib/Homepage/homepage-lib";

type Params = {
    params: {
       serviceId: string;
    };
  };

  export async function getStaticProps({ params }: Params) {
    const service = await getServiceById(params.serviceId);
    console.log(service);
    const homepage = await getHomepage();   
  
    return {
        props: {service,homepage},
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, //in seconds
    };
  }

  export async function getStaticPaths() {
    const allServicesPosts = await getAllserviceWithIds();

    return {
      paths: allServicesPosts.map(({ id }) => `/service/${id}`) ?? [],
      fallback: true,
    };
  }
  
  type Props = {
    service: ServiceDetails;
    homepage: Homepage;
  };

  const ServiceData = ({service,homepage}: Props) => {
        return (
            <>
            <Head>
              <title>Homepage</title>
              <link rel="icon" href='/favicon.png' />
            </Head>
      
            <Header header={homepage.header}/>
            <ServiceDetailsData  serviceData={service}/> 
            
          </> 
        )
  };

  export default ServiceData;