type TaxonomyDetails = {
    id: string
  }
  
  export default TaxonomyDetails

export type TaxonomyResult = {
    total: string
    results: TaxonomyDetails[];
}