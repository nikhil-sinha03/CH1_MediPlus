export type MetaData = {
  id: string
  name: string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export type MetaDataResults = {
total: string;
results: MetaData[];
}