<script lang="ts">
	import { BASE_URL } from '$lib/constants';
	import { updateFormData } from '$lib/helpers/update';
	export let data = {
		person: {
			FirstName: '',
			MiddleInitial: '',
			LastName: '',
			DateOfBirth: '',
			Gender: '',
			AlabamaCitizen: false
		}
	};
	const { person } = data;

	let formMessage = '';
	// Convert date to YYYY-MM-DD format
	const formatDate = (dateStr: string) => {
		return dateStr.split('T')[0];
	};
	// Need to format date so that it can be displayed in the date input field
	$: if (person.DateOfBirth) {
		person.DateOfBirth = formatDate(person.DateOfBirth);
	}
	const handleSubmit = async () => {
		const { message, error } = await updateFormData({
			url: `${BASE_URL}/api/people/${person.Id}`,
			entries: {
				FirstName: person.FirstName,
				MiddleInitial: person.MiddleInitial,
				LastName: person.LastName,
				DateOfBirth: person.DateOfBirth,
				Gender: person.Gender,
				AlabamaCitizen: person.AlabamaCitizen
			},
			successMessage: 'Person updated successfully',
			errorMessagePrefix: 'An error occurred while updating the person: '
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
		<h1 class="text-xl">Edit Person</h1>
		{#if person}
			<form on:submit|preventDefault={handleSubmit}>
				<label for="FirstName" class="block text-sm font-medium text-gray-700">First Name</label>
				<input
					bind:value={person.FirstName}
					type="text"
					name="FirstName"
					id="FirstName"
					class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
					required
				/>

				<label for="LastName" class="block text-sm font-medium text-gray-700">Last Name</label>
				<input
					bind:value={person.LastName}
					type="text"
					name="LastName"
					id="LastName"
					class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
					required
				/>

				<label for="DateOfBirth" class="block text-sm font-medium text-gray-700"
					>Date of Birth</label
				>
				<input
					type="date"
					bind:value={person.DateOfBirth}
					name="DateOfBirth"
					id="DateOfBirth"
					class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
					required
				/>

				<label for="Gender" class="block text-sm font-medium text-gray-700">Gender</label>
				<select
					name="Gender"
					id="Gender"
					bind:value={person.Gender}
					class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
					required
				>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="not provided">Not Provided</option>
				</select>

				<div class="mt-4">
					<label class="inline-flex items-center">
						<input type="checkbox" bind:checked={person.AlabamaCitizen} class="form-checkbox" />
						<span class="ml-2">Alabama Citizen</span>
					</label>
				</div>

				<div class="my-2 flex justify-center gap-2">
					<button type="submit" class="bg-blue-500 px-2 py-1 text-white hover:bg-blue-700"
						>Save</button
					>
				</div>
			</form>
		{/if}
	{/if}
</div>
