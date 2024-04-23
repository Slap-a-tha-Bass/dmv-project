import { BASE_URL } from '$lib/constants';
// Disable TLS/SSL certificate verification for Node.js HTTPS requests
// This is generally not recommended for production use
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const actions = {
	default: async ({ request }) => {
		try {
			const data = await request.formData();

			// Check if the 'Inspected' field is checked
			const alabamaCitizen = data.has('AlabamaCitizen');

			const FirstName = data.get('FirstName');
			const MiddleInitial = data.get('MiddleInitial');
			const LastName = data.get('LastName');
			const DateOfBirth = data.get('DateOfBirth');
			const Gender = data.get('Gender');

			const formData = new URLSearchParams();
			formData.append('FirstName', FirstName?.toString() ?? '');
			formData.append('MiddleInitial', MiddleInitial?.toString() ?? '');
			formData.append('LastName', LastName?.toString() ?? '');
			formData.append('DateOfBirth', DateOfBirth?.toString() ?? '');
			formData.append('Gender', Gender?.toString() ?? '');
			// Append the 'Inspected' field as a boolean value
			formData.append('AlabamaCitizen', alabamaCitizen ? 'true' : 'false');

			const response = await fetch(`${BASE_URL}/api/people`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: formData
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			return {
				message: 'Person added successfully!'
			};
		} catch (error: unknown) {
			console.error('Error:', error);
			return {
				error: `An error occurred while adding the person: ${(error as Error).message}`
			};
		}
	}
};
