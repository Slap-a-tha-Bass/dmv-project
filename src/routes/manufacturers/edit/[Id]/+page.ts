import type { PageLoadEvent } from './$types';
import type { Manufacturer } from '$lib/types';
import { BASE_URL } from '$lib/constants';

export async function load({ fetch, params }: PageLoadEvent) {
	try {
		const res = await fetch(`${BASE_URL}/api/manufacturers/${params.Id}`);
		const manufacturer: Manufacturer = await res.json();
		return { manufacturer };
	} catch (error) {
		console.error(error);
	}
}
