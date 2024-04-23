import { BASE_URL } from '$lib/constants';
import type { Actions } from '@sveltejs/kit';

// Disable TLS/SSL certificate verification for Node.js HTTPS requests
// This is generally not recommended for production use
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const actions: Actions = {
	default: async ({ request }) => {
		try {
			const data = await request.formData();

			// Check if the 'Inspected' field is checked
			const inspected = data.has('Inspected');

			// Create a new URLSearchParams object to format the data as x-www-form-urlencoded
			const formData = new URLSearchParams();
			formData.append('ManufacturerId', data.get('ManufacturerId')?.toString() || '');
			formData.append('VehicleType', data.get('VehicleType')?.toString() || '');
			formData.append('Year', data.get('Year')?.toString() || '');
			formData.append('Model', data.get('Model')?.toString() || '');
			formData.append('Color', data.get('Color')?.toString() || '');
			formData.append('Color2', data.get('Color2')?.toString() || '');
			formData.append('FuelType', data.get('FuelType')?.toString() || '');
			formData.append('RegistrationNumber', data.get('RegistrationNumber')?.toString() || '');
			formData.append(
				'RegistrationExpiration',
				data.get('RegistrationExpiration')?.toString() || ''
			);
			formData.append('MaximumPassengers', data.get('MaximumPassengers')?.toString() || '');
			formData.append('AssessedValue', data.get('AssessedValue')?.toString() || '');
			formData.append('NumberOfDoors', data.get('NumberOfDoors')?.toString() || '');
			formData.append('RegistrationState', data.get('RegistrationState')?.toString() || '');
			// Append the 'Inspected' field as a boolean value
			formData.append('Inspected', inspected ? 'true' : 'false');
			formData.append('EngineCylinders', data.get('EngineCylinders')?.toString() || '');

			// Make a POST request to the '/api/vehicles' endpoint of the API
			const response = await fetch(`${BASE_URL}/api/vehicles`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: formData
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			// If the request was successful, parse the response and return the new vehicle
			const newVehicle = await response.json();
			return {
				message: 'Vehicle added successfully!',
				vehicle: newVehicle
			};
		} catch (error: unknown) {
			console.error('Error:', error);
			return {
				error: `An error occurred while adding the vehicle: ${(error as Error).message}`
			};
		}
	}
};
