<script>
	import Header from '$lib/components/Header.svelte';
	import SideBarNav from '$lib/components/SideBarNav.svelte';
	import '../app.css';
</script>

<Header />
<div class="ml-44 mt-11 grid grid-cols-4">
	<SideBarNav />
	<slot />
</div>
