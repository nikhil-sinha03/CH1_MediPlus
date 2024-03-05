import { ServiceResult } from "../Services/ServiceDetails"

type ServicesListing = {
    servicesListing: {
        serviceListingIntro: string
        serviceListingDescription: string
        serviceslist: ServiceResult
    }
}

export default ServicesListing