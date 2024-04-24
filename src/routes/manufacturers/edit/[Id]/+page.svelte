<script lang="ts">
	import { BASE_URL } from '$lib/constants';
	import Button from '$lib/controls/Button.svelte';
	import { updateFormData } from '$lib/helpers/update';
	export let data = {
		manufacturer: {
			Name: '',
			CountryOfOrigin: ''
		}
	};
	const { manufacturer } = data;
	let formMessage = '';
	const handleSubmit = async () => {
		const { message, error } = await updateFormData({
			url: `${BASE_URL}/api/manufacturers/${manufacturer.Id}`,
			entries: {
				Name: manufacturer.Name,
				CountryOfOrigin: manufacturer.CountryOfOrigin
			},
			successMessage: 'Manufacturer updated successfully',
			errorMessagePrefix: 'An error occurred while updating the manufacturer: '
		});
		formMessage = message ?? error ?? '';
	};
</script>

<div class="col-span-4 p-2">
	{#if formMessage}
		<div>
			<p>{formMessage}</p>
		</div>
	{:else}
		<h1 class="text-xl">Edit Manufacturer</h1>
		{#if manufacturer}
			<form on:submit|preventDefault={handleSubmit}>
				<label for="Name" class="block text-sm font-medium text-gray-700">Manufacturer Name</label>
				<input
					bind:value={manufacturer.Name}
					type="text"
					name="Name"
					id="Name"
					class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
				/>
				<label for="CountryofOrigin" class="block text-sm font-medium text-gray-700"
					>Country of Origin</label
				>
				<input
					bind:value={manufacturer.CountryOfOrigin}
					type="text"
					name="CountryofOrigin"
					id="CountryofOrigin"
					class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
				/>
				<div class="my-2 flex justify-center gap-2">
					<Button type="submit" text="Save" color="blue" />
				</div>
			</form>
		{/if}
	{/if}
</div>
