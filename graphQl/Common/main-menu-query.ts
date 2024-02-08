export const TWO_LEVEL_MENU_QUERY = 
` 
  menu {
    results {
      ... on MediplusMenu {
        title
        url
        haveChild
        childMenu {
          results {
            ... on MediplusMenu {
              title
              url
              haveChild
            }
          }
        }
      }
    }
  }
    `;
export default TWO_LEVEL_MENU_QUERY;