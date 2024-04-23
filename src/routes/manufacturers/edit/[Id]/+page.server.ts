import type { Manufacturer } from '$lib/types';
import type { LoadEvent } from '@sveltejs/kit';
import { BASE_URL } from '$lib/constants';
// Disable TLS/SSL certificate verification for Node.js HTTPS requests
// This is generally not recommended for production use
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export async function load({ fetch, params }: LoadEvent) {
	try {
		const res = await fetch(`${BASE_URL}/api/manufacturers/${params.Id}`);
		const manufacturer: Manufacturer = await res.json();
		return { manufacturer };
	} catch (error) {
		console.error(error);
	}
}
