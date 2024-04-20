<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />
<aside>
	<nav>
		<ul>
			<li><a href="/manufacturers">Manufacturers</a></li>
			<li><a href="/vehicles">Vehicles</a></li>
			<li><a href="/people">People</a></li>
		</ul>
	</nav>
</aside>
<slot />
