<script lang="ts">
	import type { Vehicle } from '$lib/types';
	import { convertDateFormat } from '$lib/helpers';
	import { BASE_URL } from '$lib/constants';
	import Button from '$lib/controls/Button.svelte';
	export let vehicles: Vehicle[] = [];

	// Function to delete a vehicle
	const deleteVehicle = async (id: string) => {
		// Display a confirmation dialog and proceed with the deletion only if the user clicked "OK"
		if (confirm('Are you sure you want to delete this vehicle?')) {
			const response = await fetch(`${BASE_URL}/api/vehicles/${id}`, {
				method: 'DELETE'
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			vehicles = vehicles.filter((vehicle) => vehicle.Id !== id);
		}
	};
</script>

<div class="col-span-4">
	{#each vehicles ?? [] as vehicle}
		<div class="grid grid-cols-3 items-center border-b-2 border-black py-2">
			<p class="text-sm">{vehicle.Model}</p>
			<p class="text-sm">{convertDateFormat(vehicle.RegistrationExpiration)}</p>
			<div class="flex items-center justify-end gap-2">
				<Button text="Edit" color="blue" href={`/vehicles/edit/${vehicle.Id}`} />
				<Button text="Delete" color="red" on:click={() => deleteVehicle(vehicle.Id ?? '')} />
			</div>
		</div>
	{/each}
</div>
