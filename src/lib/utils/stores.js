import { writable } from 'svelte/store';

export const searchTerm = writable('');
export const classes = writable([]);
export const details = writable([]);
export const detailsValid = writable(true);
export const international = writable([]);
