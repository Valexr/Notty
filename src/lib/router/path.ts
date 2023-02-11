import { writable } from 'svelte/store';

export const pathname = writable<string>('/');

export const pathparams = writable<URLSearchParams | null>(null);
