<script lang="ts">
	import type { Manufacturer } from '$lib/types/index';
	export let manufacturers: Manufacturer[] = [];
	import { BASE_URL } from '$lib/constants';

	// Function to delete a manufacturer
	const deleteManufacturer = async (id: string) => {
		// Display a confirmation dialog and proceed with the deletion only if the user clicked "OK"
		if (confirm('Are you sure you want to delete this manufacturer?')) {
			const response = await fetch(`${BASE_URL}/api/manufacturers/${id}`, {
				method: 'DELETE'
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			manufacturers = manufacturers.filter((manufacturer) => manufacturer.Id !== id);
		}
	};
</script>

{#each manufacturers ?? [] as manufacturer}
	<div class="grid grid-cols-3 py-2">
		<p class="text-sm">{manufacturer.Name}</p>
		<p class="text-sm">{manufacturer.CountyOfOrigin}</p>
		<div class="flex justify-end gap-2">
			<button class="bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-700"
				><a href={`/manufacturers/edit/${manufacturer.Id}`}>Edit</a></button
			>
			<button
				on:click={() => deleteManufacturer(manufacturer.Id)}
				class="delete bg-red-500 px-2 py-1 font-bold text-white hover:bg-red-700">Delete</button
			>
		</div>
	</div>
{/each}
