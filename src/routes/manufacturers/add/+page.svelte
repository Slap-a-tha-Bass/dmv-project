<script>
	import { enhance } from '$app/forms';
	import { BASE_URL } from '$lib/constants';
	import Button from '$lib/controls/Button.svelte';
	export let form;
	$: console.log(form);
</script>

<div class="col-span-4 p-2">
	{#if form?.message}
		<div class="flex flex-col items-center justify-center gap-2">
			<p>{form.message}</p>
			<button class="bg-blue-500 px-2 py-1 text-white hover:bg-blue-700"
				><a href="/manufacturers">View Manufacturers</a></button
			>
		</div>
	{:else}
		<form use:enhance method="POST">
			<label for="Name" class="block text-sm font-medium text-gray-700">Name</label>
			<input
				type="text"
				name="Name"
				id="Name"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
				required
			/>
			<label for="countryOfOrigin" class="block text-sm font-medium text-gray-700"
				>Country of Origin</label
			>
			<input
				type="text"
				name="CountryOfOrigin"
				id="CountryOfOrigin"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
				required
			/>
			<div class="my-2 flex justify-center gap-2">
				<Button type="submit" text="Save" color="blue" />
			</div>
		</form>
	{/if}
</div>
