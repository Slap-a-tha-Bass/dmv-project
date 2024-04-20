import type { PageLoadEvent } from './$types';
import type { Manufacturer } from '$lib/types';

const BASE_URL = 'https://localhost:44357';

export async function load({ fetch }: PageLoadEvent) {
	try {
		const res = await fetch(`${BASE_URL}/api/manufacturers`);
		const manufacturers: Manufacturer[] = await res.json();
		console.log('manufacturers', manufacturers);
		return { manufacturers };
	} catch (error) {
		console.error(error);
	}
}
