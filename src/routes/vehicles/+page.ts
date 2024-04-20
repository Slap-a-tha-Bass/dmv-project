import type { PageLoadEvent } from './$types';
import type { Vehicle } from '../../app.d.ts';

const BASE_URL = 'https://localhost:44357';

export async function load({ fetch }: PageLoadEvent) {
	try {
		const res = await fetch(`${BASE_URL}/api/vehicles`);
		const vehicles: Vehicle[] = await res.json();
		console.log('vehicles', vehicles);
		return { vehicles };
	} catch (error) {
		console.error(error);
	}
}
