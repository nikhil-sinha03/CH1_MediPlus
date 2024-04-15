import { CONTACTPAGE_QUERY } from "../../graphQl/ContactPage/contactpage-query";
import ContactDetails from "../../types/ContactPage/ContactData";
import {fetchAPI} from "../Common/api"

export async function getContactpage(): Promise<ContactDetails> {
  
    const queryContactpage = `{ 
      ${CONTACTPAGE_QUERY}
    }`;
  
    
    const data = await fetchAPI(queryContactpage);
    //console.log(data);
    return data.data;
  }