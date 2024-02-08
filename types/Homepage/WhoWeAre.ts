import { MediaResults } from "../Common/media-type"
import { JSONContent } from '@tiptap/react';

export type WhoWeAre = {
  whoWeAre: {
    whoWeAreTitle: string
    whoWeAreDescription: string
    whoWeAreContent: JSONContent
    whoWeAreHighlightLeft: string
    whoWeAreHighlightRight: string
    whoWeAreIntroVideoLink: string
    whoWeAreIntroVideoThumbnail: MediaResults
  }
  
}

export default WhoWeAre