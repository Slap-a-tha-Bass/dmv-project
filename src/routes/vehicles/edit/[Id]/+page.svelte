<script>
	import Button from '$lib/controls/Button.svelte';
	import { convertDateFormat } from '$lib/helpers';

	export let data;
	const { vehicle } = data;
	if (vehicle) {
		vehicle.RegistrationExpiration = convertDateFormat(vehicle.RegistrationExpiration);
	}
	console.log('vehicle', vehicle);
</script>

<div class="col-span-4 p-2">
	<h1 class="text-xl">Edit Vehicle</h1>
	{#if vehicle}
		<form>
			<label for="Name" class="block text-sm font-medium text-gray-700">Vehicle Model</label>
			<input
				value={vehicle.Model}
				type="text"
				name="Name"
				id="Name"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			/>
			<label for="RegistrationExpiration" class="block text-sm font-medium text-gray-700"
				>Registration Expiration</label
			>
			<input
				bind:value={vehicle.RegistrationExpiration}
				type="text"
				name="RegistrationExpiration"
				id="RegistrationExpiration"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			/>
			<div class="my-2 flex justify-center gap-2">
				<Button type="submit" text="Save" color="blue" />
			</div>
		</form>
	{/if}
</div>
