export async function updateFormData({
	url,
	entries,
	successMessage,
	errorMessagePrefix
}: {
	url: string;
	entries: Record<string, any>;
	successMessage: string;
	errorMessagePrefix: string;
}) {
	try {
		const formData = new URLSearchParams();
		for (const [key, value] of Object.entries(entries)) {
			formData.append(key, value ? value.toString() : '');
		}

		const response = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: formData
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		return { message: successMessage };
	} catch (error) {
		console.error('Error:', error);
		return { error: `${errorMessagePrefix}: ${(error as Error).message}` };
	}
}
