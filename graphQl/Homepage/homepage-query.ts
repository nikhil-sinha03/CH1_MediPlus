import MEDIA_QUERY from "../Common/media-query";
import META_DATA_QUERY from "../Common/meta-data-query";
import { HOMEPAGE_ID } from "../../lib/Common/constants";
import HEADER_QUERY from "../Common/header-query";
import { SERVICE_QUERY } from "../Services/service-query";
import { PRICING_QUERY } from "./pricingList-query";

export const HOMEPAGE_QUERY = `
  introBanner: mediplusHomepage(id: "${HOMEPAGE_ID}"){
    introBannerTitle
    introBannerDescription
    introBannerLink
    introBannerImage {
      results {
        ${MEDIA_QUERY}
      }
    }
  },
  whoWeAre: mediplusHomepage(id: "${HOMEPAGE_ID}"){
    whoWeAreTitle
    whoWeAreContent
    whoWeAreDescription
    whoWeAreHighlightLeft
    whoWeAreHighlightRight
    whoWeAreIntroVideoLink
    whoWeAreIntroVideoThumbnail {
      results {
        ${MEDIA_QUERY}
      }
    }
  }
  emergencyCare: mediplusHomepage(id: "${HOMEPAGE_ID}"){
    emergencyCareTitle
    emergencyCareDescription
    emergencyCareLink
  }
  servicesListing: mediplusHomepage(id: "${HOMEPAGE_ID}"){
    serviceListingIntro
    serviceListingDescription
    serviceslist {
      total
      results {
        __typename
        ... on MediplusService {
          ${SERVICE_QUERY}
        }
      }
    }
  }
  pricingIntro: mediplusHomepage(id: "${HOMEPAGE_ID}"){
    pricingIntro
    pricingDescription
    pricingCategory {
      total
      results {
        __typename
        ... on MediplusPricingCategory {
          ${PRICING_QUERY}
        }
      }
    }
  },
  allTaxonomy_mediplusPricingServices {
    total
    results {
      id
    }
  }
  ${HEADER_QUERY}
`;


