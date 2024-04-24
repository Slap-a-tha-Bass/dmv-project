<script lang="ts">
	import { BASE_URL } from '$lib/constants';
	export let data;
	const { person } = data;
	console.log('person', person);
	let formMessage = '';

	// const handleSubmit = async () => {
	// 	try {
	// 		const formData = new URLSearchParams();
	// 		formData.append('FirstName', person.FirstName);
	// 		formData.append('LastName', person.LastName);
	// 		formData.append('DateOfBirth', person.DateOfBirth);
	// 		formData.append('Gender', person.Gender);
	// 		formData.append('AlabamaCitizen', person.AlabamaCitizen.toString());

	// 		const response = await fetch(`${BASE_URL}/api/people/${person.Id}`, {
	// 			method: 'PUT',
	// 			headers: {
	// 				'Content-Type': 'application/x-www-form-urlencoded'
	// 			},
	// 			body: formData
	// 		});
	// 		if (!response.ok) {
	// 			throw new Error(`HTTP error! status: ${response.status}`);
	// 		}
	// 		formMessage = 'Person updated successfully';
	// 	} catch (error) {
	// 		console.error('Error:', error);
	// 		formMessage = `An error occurred while updating the person: ${(error as Error).message}`;
	// 	}
	// };
</script>

<div class="col-span-4 p-2">
	{#if formMessage}
		<div>
			<p>{formMessage}</p>
		</div>
	{:else}
		<h1 class="text-xl">Edit Person</h1>
		{#if person}
			<form on:submit|preventDefault>
				<label for="FirstName" class="block text-sm font-medium text-gray-700">First Name</label>
				<input
					value={person.FirstName}
					type="text"
					name="FirstName"
					id="FirstName"
					class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
					required
				/>

				<label for="LastName" class="block text-sm font-medium text-gray-700">Last Name</label>
				<input
					value={person.LastName}
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
					value={person.DateOfBirth}
					name="DateOfBirth"
					id="DateOfBirth"
					class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
					required
				/>

				<label for="Gender" class="block text-sm font-medium text-gray-700">Gender</label>
				<select
					name="Gender"
					id="Gender"
					value={person.Gender}
					class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
					required
				>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Other">Other</option>
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
