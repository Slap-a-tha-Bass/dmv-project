import type { PageLoadEvent } from './$types';
import type { Manufacturer } from '$lib/types';
import { BASE_URL } from '$lib/constants';

export async function load({ fetch }: PageLoadEvent) {
	try {
		const res = await fetch(`${BASE_URL}/api/manufacturers`);
		const manufacturers: Manufacturer[] = await res.json();
		return { manufacturers };
	} catch (error) {
		console.error(error);
	}
}
