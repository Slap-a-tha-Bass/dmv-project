<script lang="ts">
	import type { Vehicle } from '$lib/types';
	import { convertDateFormat } from '$lib/helpers';
	import { BASE_URL } from '$lib/constants';
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

<div class="col-span-3 p-2">
	{#each vehicles ?? [] as vehicle}
		<div class="grid grid-cols-3 py-2">
			<p class="text-sm">{vehicle.Model}</p>
			<p class="text-sm">{convertDateFormat(vehicle.RegistrationExpiration)}</p>
			<div class="flex justify-end gap-2">
				<button class="bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-700">
					<a href={`/vehicles/edit/${vehicle.Id}`}>Edit</a>
				</button>
				<button
					on:click={() => deleteVehicle(vehicle.Id ?? '')}
					class="delete bg-red-500 px-2 py-1 font-bold text-white hover:bg-red-700"
					>Delete
				</button>
			</div>
		</div>
	{/each}
</div>
