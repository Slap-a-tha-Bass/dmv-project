<script lang="ts">
	import PeopleList from '$lib/components/PeopleList.svelte';
	import Button from '$lib/controls/Button.svelte';

	export let data;
	const allPeople = data.people;

	let searchQuery = '';
	let people = allPeople;
	$: people = searchQuery
		? people?.filter(
				(person) =>
					(person.FirstName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
					(person.LastName || '').toLowerCase().includes(searchQuery.toLowerCase())
			)
		: allPeople;
</script>

<div class="col-span-4 p-2">
	<form on:submit|preventDefault>
		<input
			type="search"
			class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			placeholder="Search..."
			bind:value={searchQuery}
		/>

		<div class="my-2 flex justify-end gap-2">
			<Button text="+ Add" color="blue" href="/people/add" />
		</div>
	</form>
	<div class="grid grid-cols-4 border-b-2 border-black">
		<p class="text-lg">Full Name</p>
		<p class="text-lg">DOB</p>
		<p class="text-lg">Alabama Citizen</p>
		<p class="flex justify-end text-lg">Actions</p>
	</div>
	{#if people?.length ?? 0 > 0}
		<PeopleList {people} />
	{:else}
		<p class="p-2">No matches found for your search</p>
	{/if}
</div>
