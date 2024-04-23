<script lang="ts">
	import { enhance } from '$app/forms';
	import { BASE_URL } from '$lib/constants';
	export let data = {
		manufacturer: {
			Name: '',
			CountyOfOrigin: ''
		}
	};
	const { manufacturer } = data;
</script>

<div class="col-span-3 p-2">
	<h1 class="text-xl">Edit Manufacturer</h1>
	{#if manufacturer}
		<form use:enhance method="POST" action="?/update">
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
				bind:value={manufacturer.CountyOfOrigin}
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
</div>
