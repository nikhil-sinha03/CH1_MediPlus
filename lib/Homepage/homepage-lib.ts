import Homepage from "../../types/Homepage/homepage-type";
import {fetchAPI} from "../Common/api"
import {HOMEPAGE_QUERY} from "../../graphQl/Homepage/homepage-query";


export async function getHomepage(): Promise<Homepage> {
  
  const queryHomepage = `{ 
    ${HOMEPAGE_QUERY}
  }`;

  
  const data = await fetchAPI(queryHomepage);
  //console.log(data);
  return data.data;
}
