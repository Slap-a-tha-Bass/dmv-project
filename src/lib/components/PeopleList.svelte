<script lang="ts">
	import type { Person } from '$lib/types';
	import { BASE_URL } from '$lib/constants';
	import { convertDateFormat } from '$lib/helpers';
	import Button from '$lib/controls/Button.svelte';

	export let people: Person[] = [];

	// Function to delete a person
	const deletePerson = async (id: string) => {
		// Display a confirmation dialog and proceed with the deletion only if the user clicked "OK"
		if (confirm('Are you sure you want to delete this person?')) {
			const response = await fetch(`${BASE_URL}/api/people/${id}`, {
				method: 'DELETE'
			});
			if (!response.ok) {
				throw new Error(`Could not delete the person. Status: ${response.statusText}`);
			}
			people = people.filter((person) => person.Id !== id);
		}
	};
</script>

{#each people ?? [] as person}
	<div class="grid grid-cols-4 items-center gap-2 border-b-2 border-black py-2">
		<div>
			<p class="text-md">{person.FirstName} {person.MiddleInitial} {person.LastName}</p>
		</div>

		<p class="text-sm">{convertDateFormat(person.DateOfBirth ?? '')}</p>
		<p class="text-sm">{person.AlabamaCitizen === true ? 'Yes' : 'No'}</p>
		<div class="flex justify-end gap-2">
			<Button text="Edit" color="blue" href={`/people/edit/${person.Id}`}>Edit</Button>
			<Button text="Delete" color="red" onClick={() => deletePerson(person.Id ?? '')}>Delete</Button
			>
		</div>
	</div>
{/each}
