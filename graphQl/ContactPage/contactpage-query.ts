import { CONTACTPAGE_ID } from "../../lib/Common/constants";

export const CONTACTPAGE_QUERY = `
    contactPage: mediplusContact(id: "${CONTACTPAGE_ID}"){
        name
        email
        phone
        addressLine1
        addressLine2
        openingHoursLine1
        openingHoursLine2
        googleMapLink
  }
`;