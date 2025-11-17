export type ChatStoreState = {
  status: ChatClientStatus
  chatLog: ChatMessage[]
  errorMessage: string
}

export interface ChatMessage {
  id: string
  timestamp: number
  parts: ChatMessagePart[]
}

export interface ChatMessagePart {
  id: string
  class: string
  text: string
}
