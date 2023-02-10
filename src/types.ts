export type Card = {
    id: number
    type: string
    content: string
    state: "active" | "archived"
}