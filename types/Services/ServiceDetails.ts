import { JSONContent } from "@tiptap/react"
import { MediaResults } from "../Common/media-type"

type ServiceDetails = {
    id: string
    name: string
    title: string
    smallTitle: string
    description: string
    content: JSONContent
    iconClass: string
    introImage: MediaResults
}

export default ServiceDetails

export type ServiceResult = {
    total: string;
    results: ServiceDetails[];
}