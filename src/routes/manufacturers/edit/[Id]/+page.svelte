<script lang="ts">
	import { BASE_URL } from '$lib/constants';
	export let data = {
		manufacturer: {
			Name: '',
			CountryOfOrigin: ''
		}
	};
	const { manufacturer } = data;
	let formMessage = '';
	const handleSubmit = async () => {
		try {
			const formData = new URLSearchParams();
			// Append the 'Name' and 'CountryOfOrigin' fields to the formData
			formData.append('Name', manufacturer?.Name ? manufacturer.Name.toString() : '');
			formData.append(
				'CountryOfOrigin',
				manufacturer?.CountryOfOrigin ? manufacturer.CountryOfOrigin.toString() : ''
			);
			const response = await fetch(`${BASE_URL}/api/manufacturers/${manufacturer?.Id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: formData
			});
			// If the response was not ok, throw an error
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			formMessage = 'Manufacturer updated successfully';
		} catch (error) {
			console.error('Error:', error);
			formMessage = `An error occurred while updating the manufacturer: ${(error as Error).message}`;
		}
	};
</script>

<div class="col-span-4 p-2">
	{#if formMessage}
		<div>
			<p>{formMessage}</p>
		</div>
	{:else}
		<h1 class="text-xl">Edit Manufacturer</h1>
		{#if manufacturer}
			<form on:submit|preventDefault={handleSubmit}>
				<label for="Name" class="block text-sm font-medium text-gray-700">Manufacturer Name</label>
				<input
					value={manufacturer.Name}
					type="text"
					name="Name"
					id="Name"
					class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
				/>
				<label for="CountryofOrigin" class="block text-sm font-medium text-gray-700"
					>Country of Origin</label
				>
				<input
					bind:value={manufacturer.CountryOfOrigin}
					type="text"
					name="CountryofOrigin"
					id="CountryofOrigin"
					class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
				/>
				<div class="my-2 flex justify-center gap-2">
					<button type="submit" class="bg-blue-500 px-2 py-1 text-white hover:bg-blue-700"
						>Save</button
					>
				</div>
			</form>
		{/if}
	{/if}
</div>
