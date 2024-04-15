import MEDIA_QUERY from "../Common/media-query";
import META_DATA_QUERY from "../Common/meta-data-query";

export const SERVICE_QUERY = ` 
  id
  name
  title
  smallTitle
  description
  content
  iconClass
  introImage {
    total
    results{
      ${MEDIA_QUERY}
    }
  }
`;

export const ALL_SERVICES_QUERY = `{ 
    data: allMediplusService
    {
      __typename
      total
      results {
        ${SERVICE_QUERY}
      }
    }
  }
  `;

export default ALL_SERVICES_QUERY

