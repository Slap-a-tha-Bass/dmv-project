<script>
	import { enhance } from '$app/forms';
	import { BASE_URL } from '$lib/constants';
	import Button from '$lib/controls/Button.svelte';
	export let form;
	let alabamaCitizen = false;
	$: console.log(form);
</script>

<div class="col-span-4 p-2">
	{#if form?.message}
		<div class="flex flex-col items-center justify-center gap-2">
			<p>{form.message}</p>
			<Button text="View People" color="blue" href="/people" />
		</div>
	{:else}
		<form use:enhance method="POST">
			<label for="FirstName" class="block text-sm font-medium text-gray-700">First Name</label>
			<input
				type="text"
				name="FirstName"
				id="FirstName"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
				required
			/>
			<label for="MiddleInitial" class="block text-sm font-medium text-gray-700"
				>Middle Initial</label
			>
			<input
				type="text"
				name="MiddleInitial"
				id="MiddleInitial"
				maxlength="1"
				class="w-10 rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			/>

			<label for="LastName" class="block text-sm font-medium text-gray-700">Last Name</label>
			<input
				type="text"
				name="LastName"
				id="LastName"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
				required
			/>
			<label for="DateOfBirth" class="block text-sm font-medium text-gray-700">Date of Birth</label>
			<input
				type="date"
				name="DateOfBirth"
				id="DateOfBirth"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
				required
			/>
			<label for="Gender" class="block text-sm font-medium text-gray-700">Gender</label>
			<select
				name="Gender"
				id="Gender"
				required
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			>
				<option value="" disabled selected>Select Gender</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="not provided">Not Provided</option>
			</select>
			<div class="mt-4">
				<label class="inline-flex items-center">
					<input
						type="checkbox"
						name="AlabamaCitizen"
						bind:checked={alabamaCitizen}
						class="form-checkbox"
					/>
					<span class="ml-2">Alabama Citizen</span>
				</label>
			</div>
			<div class="my-2 flex justify-center gap-2">
				<Button type="submit" text="Save" color="blue" />
			</div>
		</form>
	{/if}
</div>
