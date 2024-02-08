import TWO_LEVEL_MENU_QUERY from "./main-menu-query";
import MEDIA_QUERY from "./media-query";

export const HEADER_QUERY = 
` 
    header: mediplusHeader(id: "eh6Mf7vTTEW9AJBa-3B5nw") {
      logo {
        results {
          ${MEDIA_QUERY}
        }
      }
      ${TWO_LEVEL_MENU_QUERY}
    }
    `;
export default HEADER_QUERY;