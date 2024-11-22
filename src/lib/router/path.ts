import { writable } from 'svelte/store';

export const pathName = writable<string>('/');

export const pathParams = writable<URLSearchParams>();
