import { writable } from 'svelte/store';
import type { Card } from '$types';

// Cards
export const cards = writable<Card>(JSON.parse(localStorage.getItem('cards') || '[]'));

// Context menu
export const contextMenu = writable({
    isOpen: false,
    card: {},
    pos: { x: 0, y: 0 },
    toggleState: null,
    deleteCard: null
});

// Search
export const searchText = writable('');
