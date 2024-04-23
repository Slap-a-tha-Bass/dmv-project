<script lang="ts">
	import VehicleList from '$lib/components/VehicleList.svelte';

	export let data;
	const allVehicles = data.vehicles;
	const allManufacturers = data.manufacturers;

	let searchQuery = '';
	let selectedManufacturerId = '';
	let vehicles = allVehicles;
	$: vehicles = searchQuery
		? vehicles?.filter(
				(vehicle) =>
					vehicle.Model.toLowerCase().includes(searchQuery.toLowerCase()) ||
					vehicle.RegistrationExpiration.toLowerCase().includes(searchQuery.toLowerCase())
			)
		: allVehicles;
	$: vehicles = selectedManufacturerId
		? vehicles?.filter((vehicle) => vehicle.ManufacturerId === selectedManufacturerId)
		: vehicles;

	// Logs for debugging
	$: if (selectedManufacturerId) {
		console.log('selectedManufacturerId:', selectedManufacturerId);
		console.log('filtered vehicles:', vehicles);
	} else if (selectedManufacturerId === '') {
		console.log('selectedManufacturerId:', selectedManufacturerId);
		console.log('filtered vehicles:', vehicles);
	}
	const resetFilters = () => {
		searchQuery = '';
		selectedManufacturerId = '';
		vehicles = allVehicles;
	};
</script>

<div class="col-span-4 p-2">
	<form on:submit|preventDefault={() => alert(`You chose ${selectedManufacturerId}`)}>
		<input
			type="search"
			class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			placeholder="Search..."
			bind:value={searchQuery}
		/>
		<p class="pb-2 pt-4">-or-</p>
		<select
			bind:value={selectedManufacturerId}
			class="my-2 w-full rounded-none border border-black px-2 py-1 outline-none focus:border-indigo-600"
		>
			<option value="">Select Manufacturer</option>

			{#each allManufacturers ?? [] as manufacturer}
				<option value={manufacturer.Id}>{manufacturer.Name}</option>
			{/each}
		</select>
	</form>
	{#if searchQuery || selectedManufacturerId}
		<button
			type="button"
			on:click={resetFilters}
			class="mt-4 bg-red-500 px-2 py-1 text-white hover:bg-red-700">Clear Search</button
		>
	{/if}
	<div class="my-2 flex justify-end gap-2">
		<button class="w-32 bg-blue-500 px-2 py-1 text-white hover:bg-blue-700"
			><a href="/vehicles/add">+ Add</a></button
		>
	</div>

	<div class="grid grid-cols-3 border-b-2 border-black">
		<p class="text-lg">Model</p>
		<p class="text-lg">Registration Expiration</p>
		<p class="flex justify-end text-lg">Actions</p>
	</div>
	{#if vehicles?.length ?? 0 > 0}
		<VehicleList {vehicles} />
	{:else}
		<p class="p-2">No matches found for your search</p>
	{/if}
</div>
