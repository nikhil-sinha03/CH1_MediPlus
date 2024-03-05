import MEDIA_QUERY from "../Common/media-query";
import META_DATA_QUERY from "../Common/meta-data-query";

export const PRICING_QUERY = ` 
  id
  name
  title
  cost
  iconClass
  availableOption {
    total
    results {
      id
    }
  }
  bookingLink
`;

export const ALL_PRICING_QUERY = `{ 
    data: allPricing
    {
      __typename
      total
      results {
        ${PRICING_QUERY}
      }
    }
  }
  `;

export default ALL_PRICING_QUERY

