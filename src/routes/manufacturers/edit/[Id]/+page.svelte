<script>
	export let data;
	const { manufacturer } = data;
</script>

<div class="col-span-3 p-2">
	<h1 class="text-xl">Edit Manufacturer</h1>
	<form>
		<label for="Name" class="block text-sm font-medium text-gray-700">Manufacturer Name</label>
		<input
			type="text"
			name="Name"
			id="Name"
			class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			value={manufacturer?.Name}
		/>
		<label for="CountryofOrigin" class="block text-sm font-medium text-gray-700"
			>Country of Origin</label
		>
		<input
			type="text"
			name="CountryofOrigin"
			id="CountryofOrigin"
			class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			value={manufacturer?.CountyOfOrigin}
		/>
		<div class="my-2 flex justify-center gap-2">
			<button class="bg-blue-500 px-2 py-1 text-white hover:bg-blue-700">Save</button>
		</div>
	</form>
</div>
