<script lang="ts">
	import ManufacturerList from '$lib/components/ManufacturerList.svelte';

	export let data;
	const { manufacturers } = data;
</script>

<div class="col-span-3 p-2">
	<div>
		<input
			type="search"
			class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			placeholder="Search..."
		/>
		<div class="my-2 flex justify-end gap-2">
			<button class="bg-blue-500 px-2 py-1 text-white hover:bg-blue-700">Filter</button>
			<button class="bg-blue-500 px-2 py-1 text-white hover:bg-blue-700"
				><a href="/manufacturers/add">+ Add</a></button
			>
		</div>
	</div>
	<div class="grid grid-cols-3 border-b-2 border-black">
		<p class="text-lg">Name</p>
		<p class="text-lg">Country of Origin</p>
		<p class="flex justify-end text-lg">Actions</p>
	</div>
	<ManufacturerList {manufacturers} />
</div>
