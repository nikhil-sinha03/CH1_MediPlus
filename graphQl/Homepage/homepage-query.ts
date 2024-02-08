import MEDIA_QUERY from "../Common/media-query";
import META_DATA_QUERY from "../Common/meta-data-query";
import { HOMEPAGE_ID } from "../../lib/Common/constants";
import HEADER_QUERY from "../Common/header-query";

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
  }
  pricingIntro: mediplusHomepage(id: "${HOMEPAGE_ID}"){
    pricingIntro
    pricingDescription
  }
  ${HEADER_QUERY}
`;


