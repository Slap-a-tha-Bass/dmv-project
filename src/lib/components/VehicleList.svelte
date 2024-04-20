<script lang="ts">
	import type { Vehicle } from '$lib/types/index';
	export let vehicles: Vehicle[] = [];
</script>

{#each vehicles ?? [] as vehicle}
	<div class="grid grid-cols-3 py-2">
		<p class="text-sm">{vehicle.Model}</p>
		<p class="text-sm">{vehicle.RegistrationExpiration}</p>
		<div class="flex justify-end gap-2">
			<button class="bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-700"
				><a href={`/manufacturers/edit/${vehicle.Id}`}>Edit</a></button
			>
			<button class="delete bg-red-500 px-2 py-1 font-bold text-white hover:bg-red-700"
				>Delete</button
			>
		</div>
	</div>
{/each}
