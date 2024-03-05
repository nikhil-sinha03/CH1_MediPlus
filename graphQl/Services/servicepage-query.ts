import MEDIA_QUERY from "../Common/media-query";

export const SERVICEPAGE_QUERY = ` 
MediplusService:mediplusService(id: "70i5BUQL8EWTCIM5uWgiLQ"){
    name
    title
    smallTitle
    description
    content
    iconClass
    introImage {
        results {
            ${MEDIA_QUERY}
        }
    }
    socialMediaList {
      total
      results {
        __typename
        ... on Socialmedia {
          id
          iconClassName
          name
          mediaLink
        }
      }
    }
  }
`;