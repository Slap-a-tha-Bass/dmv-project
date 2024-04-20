import type { PageLoadEvent } from './$types';
import type { Manufacturer } from '$lib/types';

const BASE_URL = 'https://localhost:44357';

export async function load({ fetch, params }: PageLoadEvent) {
	try {
		const res = await fetch(`${BASE_URL}/api/manufacturers/${params.Id}`);
		const manufacturer: Manufacturer = await res.json();
		console.log('manufacturer', manufacturer);
		return { manufacturer };
	} catch (error) {
		console.error(error);
	}
}
