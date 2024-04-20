<script lang="ts">
	export let data;
	const { manufacturers } = data;
</script>

<h1>Manufacturers</h1>

{#each manufacturers ?? [] as manufacturer}
	<div>
		<p>{manufacturer.Id}</p>
		<p>{manufacturer.Name}</p>
		<p>{manufacturer.CountyOfOrigin}</p>
	</div>
{/each}
