import Head from "next/head";
import {getHomepage} from "../lib/Homepage/homepage-lib";
import {getContactpage} from "../lib/Contactpage/contactpage-lib";
import ContactDetails from "../types/ContactPage/ContactData";
import Homepage from "../types/Homepage/homepage-type";
import Header from "../components/Common/header";
import ContactPageData from "../components/ContactPage/contactpage";

export async function getStaticProps({ preview = false}){
    const homepage = await getHomepage();
    const contactpage = await getContactpage();
    //console.log(contactpage);
    
    return{
        props: {homepage,contactpage, preview},
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, //in seconds
    }
    
  }

  type Props = {
    contactpage: ContactDetails;
    homepage: Homepage;
  };

  const ContactPage = ({ contactpage, homepage }: Props) => {
    return (
      <>
        <Head>
          <title>Homepage</title>
          <link rel="icon" href='/favicon.png' />
        </Head>
  
        <Header header={homepage.header} />
        <ContactPageData ContactDetail={contactpage} />
  
      </>
    )
  };
  
  export default ContactPage;