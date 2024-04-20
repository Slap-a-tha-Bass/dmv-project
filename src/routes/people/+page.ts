import type { PageLoadEvent } from './$types';

const BASE_URL = 'https://localhost:44357';

export async function load({ fetch }: PageLoadEvent) {
	console.log('fetching people');
	// TODO: setup API in backend
	// try {
	// 	const res = await fetch(`${BASE_URL}/api/people`);
	// 	const people = await res.json();
	// 	return { people };
	// } catch (error) {
	// 	console.error(error);
	// }
}
