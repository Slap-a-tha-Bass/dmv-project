import type { Manufacturer } from '$lib/types';
import type { Actions } from './$types';
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

export const actions: Actions = {
	// The default action that gets called when a request is made to this endpoint
	default: async ({ request }) => {
		try {
			// Get the form data from the request
			const data = await request.formData();
			// Extract the 'Name' and 'CountryOfOrigin' fields from the form data
			const Name = data.get('Name');
			const CountryOfOrigin = data.get('CountryOfOrigin');

			// Create a new URLSearchParams object to format the data as x-www-form-urlencoded
			const formData = new URLSearchParams();
			// Append the 'Name' and 'CountryOfOrigin' fields to the formData
			formData.append('Name', Name ? Name.toString() : '');
			formData.append('CountryOfOrigin', CountryOfOrigin ? CountryOfOrigin.toString() : '');

			// Make a PUT request to the '/api/manufacturers' endpoint of the API
			const manufacturer: Manufacturer = JSON.parse(request.body as unknown as string);
			const response = await fetch(`${BASE_URL}/api/manufacturers${manufacturer.Id}`, {
				method: 'PUT',
				headers: {
					// Set the 'Content-Type' header to 'application/x-www-form-urlencoded'
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				// Include the formData in the body of the request
				body: formData
			});

			// If the response was not ok, throw an error
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			// If the request was successful, return a success message
			return {
				message: 'Manufacturer updated successfully!'
			};
		} catch (error: unknown) {
			console.error('Error:', error);
			return {
				error: `An error occurred while adding the manufacturer: ${(error as Error).message}`
			};
		}
	}
};
