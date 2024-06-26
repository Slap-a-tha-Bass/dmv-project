import type { PageLoadEvent } from './$types';
import type { Vehicle } from '$lib/types';

const BASE_URL = 'https://localhost:44357';

export async function load({ fetch }: PageLoadEvent) {
	try {
		const res = await fetch(`${BASE_URL}/api/vehicles`);
		const res2 = await fetch(`${BASE_URL}/api/manufacturers`);
		const vehicles: Vehicle[] = await res.json();
		const manufacturers = await res2.json();
		return { vehicles, manufacturers };
	} catch (error) {
		console.error(error);
	}
}
