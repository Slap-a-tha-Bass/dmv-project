<script lang="ts">
	import { page } from '$app/stores';
	let currentURL: string;
	$: currentURL = $page.url.pathname;
</script>

<aside class="col-span-1 grid bg-gradient-to-b from-indigo-300 to-indigo-600 p-2 leading-loose">
	<nav>
		<ul>
			<li>
				<a
					class:active={currentURL === '/manufacturers'}
					class="hover:underline"
					href="/manufacturers">Manufacturers</a
				>
			</li>
			<li>
				<a class:active={currentURL === '/vehicles'} class="hover:underline" href="/vehicles"
					>Vehicles</a
				>
			</li>
			<li>
				<a class:active={currentURL === '/people'} class="hover:underline" href="/people">People</a>
			</li>
		</ul>
	</nav>
</aside>

<style>
	.active {
		text-decoration: underline;
	}
</style>
