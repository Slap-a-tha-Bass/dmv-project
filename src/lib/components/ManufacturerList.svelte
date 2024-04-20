<script lang="ts">
	import type { Manufacturer } from '$lib/types/index';
	export let manufacturers: Manufacturer[] = [];
</script>

{#each manufacturers ?? [] as manufacturer}
	<div class="grid grid-cols-3 py-2">
		<p class="text-sm">{manufacturer.Name}</p>
		<p class="text-sm">{manufacturer.CountyOfOrigin}</p>
		<div class="flex justify-end gap-2">
			<button class="bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-700"
				><a href={`/manufacturers/edit/${manufacturer.Id}`}>Edit</a></button
			>
			<button class="delete bg-red-500 px-2 py-1 font-bold text-white hover:bg-red-700"
				>Delete</button
			>
		</div>
	</div>
{/each}
