<script lang="ts">
	export let data;
	const { vehicles } = data;
</script>

<h1>Manufacturers</h1>

{#each vehicles ?? [] as vehicle}
	<div>
		<p>{vehicle.Id}</p>
		<p>{vehicle.VehicleType}</p>
		<p>{vehicle.Year}</p>
		<p>{vehicle.Model}</p>
		<p>{vehicle.Color}</p>
		<p>{vehicle.Color2}</p>
		<p>{vehicle.FuelType}</p>
		<p>{vehicle.RegistrationNumber}</p>
		<p>{vehicle.RegistrationExpiration}</p>
		<p>{vehicle.MaximumPassengers}</p>
		<p>{vehicle.AssessedValue}</p>
	</div>
{/each}
