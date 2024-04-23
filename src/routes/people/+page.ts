import type { Person } from '$lib/types';
import type { PageLoadEvent } from './$types';

const BASE_URL = 'https://localhost:44357';

export async function load({ fetch }: PageLoadEvent) {
	try {
		const res = await fetch(`${BASE_URL}/api/people`);
		const people: Person[] = await res.json();
		return { people };
	} catch (error) {
		console.error(error);
	}
}
