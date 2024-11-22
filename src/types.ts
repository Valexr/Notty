export type Card = {
    id: string
    type: string
    content: string
    state: "active" | "archived",
    swipeable: boolean
}