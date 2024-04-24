<script lang="ts">
	import ManufacturerList from '$lib/components/ManufacturerList.svelte';
	import Button from '$lib/controls/Button.svelte';

	export let data;
	const allManufacturers = data.manufacturers;

	let searchQuery = '';
	let manufacturers = allManufacturers;
	$: manufacturers = searchQuery
		? manufacturers?.filter(
				(manufacturer) =>
					manufacturer.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					manufacturer.CountryOfOrigin.toLowerCase().includes(searchQuery.toLowerCase())
			)
		: allManufacturers;
</script>

<div class="col-span-4 p-2">
	<form on:submit|preventDefault>
		<input
			type="search"
			class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			placeholder="Search..."
			bind:value={searchQuery}
		/>
		<div class="my-2 flex justify-end gap-2">
			<Button text="+ Add" href="/manufacturers/add" />
		</div>
	</form>
	<div class="grid grid-cols-3 border-b-2 border-black">
		<p class="text-lg">
			Name
			<br />
			<span class="bg-gray-200 text-sm text-red-700"> Manufacturer Id </span>
		</p>
		<p class="text-lg">Country of Origin</p>
		<p class="flex justify-end text-lg">Actions</p>
	</div>
	{#if manufacturers?.length ?? 0 > 0}
		<ManufacturerList {manufacturers} />
	{:else}
		<p class="p-2">No matches found for your search</p>
	{/if}
</div>
