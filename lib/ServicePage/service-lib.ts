import {SERVICE_QUERY ,ALL_SERVICES_QUERY } from "../../graphQl/Services/service-query";
import ServiceDetails, {ServiceResult} from "../../types/Services/ServiceDetails";
import { fetchAPI } from "../Common/api";

export async function getAllServices(preview: boolean): Promise<ServiceDetails[]> {
    const data = await fetchAPI(`${ALL_SERVICES_QUERY}`);
    
    return extractPosts(data.data);
}

export async function getServiceById(id: string): Promise<ServiceDetails> {

  const queryservice = `{ 
    data: serviceData(id: "${id}")
    {
        ${SERVICE_QUERY}
    }
  }`;
  
  const data = await fetchAPI(queryservice);
  console.log(data);
  return data.data.data;
}

export async function getAllserviceWithIds(): Promise<ServiceDetails[]> {
    const  query = `{ 
      data: allService
      {
        __typename
        total
        results {
          ${SERVICE_QUERY}
        }
      }
    }`;
  
    const data = await fetchAPI(query);
     return extractPosts(data.data);
  }


function extractPosts({ data }: { data: ServiceResult }) {

    return data.results.map((post: ServiceDetails) => {
      return post;
    });
}

function extractPost({ data }: { data: ServiceDetails }) {
    return data;
  }