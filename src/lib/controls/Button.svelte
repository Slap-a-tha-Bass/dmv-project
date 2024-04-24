<script lang="ts">
	export let text: string = 'Click'; // Default button text
	export let color: string = 'blue'; // Default button color
	export let href: string = ''; // Optional href for link behavior
	export let onClick: () => void = () => {}; // Default onClick function
	export let type: 'button' | 'submit' | 'reset' = 'button'; // Default button type with restricted types

	// Function to determine the base class based on the button color
	function baseClass(color: string): string {
		return `bg-${color}-500 px-2 py-1 text-white hover:bg-${color}-700 flex justify-center items-center max-h-10 rounded-sm`;
	}
</script>

{#if href}
	<!-- Render as a link if an href is provided -->
	<a {href} class={baseClass(color)} on:click|preventDefault>
		<button>
			{text}
		</button>
	</a>
{:else}
	<!-- Render as a button if no href is provided -->
	<button {type} class={baseClass(color)} on:click={onClick}>
		{text}
	</button>
{/if}
