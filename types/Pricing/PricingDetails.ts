type PricingDetails = {
    id: string
    name: string
    title: string
    cost: string
    iconClass: string
    bookingLink: string
  }
  
  export default PricingDetails

export type PricingResult = {
    total: string;
    results: PricingDetails[];
}