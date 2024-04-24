<script lang="ts">
	import type { Manufacturer } from '$lib/types/index';
	import Button from '$lib/controls/Button.svelte';
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
	<div class="grid grid-cols-3 items-center gap-2 border-b-2 border-black py-2">
		<div>
			<p class="text-md">{manufacturer.Name}</p>
			<p class="bg-gray-200 p-1 text-xs text-red-700">{manufacturer.Id}</p>
		</div>
		<p class="text-sm">{manufacturer.CountryOfOrigin}</p>
		<div class="flex justify-end gap-2">
			<Button text="Edit" color="blue" href={`/manufacturers/edit/${manufacturer.Id}`} />
			<Button text="Delete" color="red" onClick={() => deleteManufacturer(manufacturer.Id ?? '')} />
		</div>
	</div>
{/each}
