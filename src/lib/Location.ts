import { writable } from "svelte/store";

export const location = writable<URL>(new URL("https://blog.mabla.name"))