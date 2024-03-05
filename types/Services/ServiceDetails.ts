import { JSONContent } from "@tiptap/react"

type ServiceDetails = {
    id: string
    name: string
    title: string
    smallTitle: string
    description: string
    content: JSONContent
    iconClass: string
}

export default ServiceDetails

export type ServiceResult = {
    total: string;
    results: ServiceDetails[];
}