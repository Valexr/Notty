import { writable, derived } from 'svelte/store';
import { cacheable } from './cacheable';
import type { Card } from '$types';

export const cards = createCards()
export const activeCards = derived(cards, ($cards) => $cards.filter((c) => c.state === 'active'));
export const archivedCards = derived(cards, ($cards) => $cards.filter((c) => c.state === 'archived'));

export const searchText = writable('');
export const searchedCards = derived([cards, searchText], ([$cards, $searchText]) => {
    return $cards.filter((c) => $searchText && c.content.toLowerCase().includes($searchText.toLowerCase()))
});


function createCards() {
    const INITIAL: Card[] = [{
        id: Date.now().toString(),
        type: 'text',
        content: "Hi, i'm card!\nTap or click to open me\nSwipe to archive me\nLong tap or right click to more actions :)",
        state: "active",
        swipeable: false
    }];
    const { subscribe, get, set, update } = cacheable<Card[]>('cards', INITIAL, true);
    const CARD = { id: '', type: "text", content: "", state: "active", swipable: false };
    const id = (id: string) => get().find((c) => c.id === id)

    return {
        subscribe, get, set, update, id,
        edit: (card: Partial<Card>) => update((cards) => cards.map((c) => c.id === card.id ? { ...c, ...card } : c)),
        add: (card = CARD) => update((cards) => {
            return [{ ...card, id: Date.now().toString() }, ...cards]
        }),
        copy: async (cardID: string) => {
            const card = id(cardID);
            if (card) {
                await navigator.clipboard.writeText(card.content);
            }
        },
        find: (query: Partial<Card>) => update((cards) => cards.filter(c => equals(query, c))),
        state: (state = 'active') => update((cards) => cards.filter((c) => c.state === state)),
        archive: (id: string) => update((cards) => cards.map((c) => c.id === id ? { ...c, state: c.state === "active" ? "archived" : "active" } : c)),
        unarchive: (id: string) => update((cards) => cards.map((c) => c.id === id ? { ...c, state: "active" } : c)),
        delete: (id: string) => update((cards) => cards.filter((c) => c.id !== id)),
        clear: () => set([])
    }

    function equals(query: Partial<Card>, card: Card) {
        return Object.keys(query).every((k) => card[k as keyof Card] === query[k as keyof Card])
    }
}

// Context menu
export const contextMenu = writable({
    isOpen: false,
    cardID: '',
    cardState: '',
    pos: { x: 0, y: 0 },
});
