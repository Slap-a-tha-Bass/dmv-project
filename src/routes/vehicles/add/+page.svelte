<script>
	import { enhance } from '$app/forms';
	import Button from '$lib/controls/Button.svelte';
	export let form;
	let inspected = 'false';
</script>

<div class="col-span-4 p-2">
	{#if form?.message}
		<div class="flex flex-col items-center justify-center gap-2">
			<p>{form.message}</p>
			<Button text="View Vehicles" color="blue" href="/vehicles" />
		</div>
	{:else}
		<p class="bolder text-xs italic">
			*If unsure about Manufacturer Id, visit our <a
				class="text-blue-700 underline"
				href="/manufacturers">Manufacturers</a
			> page.
		</p>
		<form use:enhance method="POST">
			<label for="ManufacturerId" class="block text-sm font-medium text-gray-700"
				>Manufacturer ID</label
			>
			<input
				type="text"
				name="ManufacturerId"
				id="ManufacturerId"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
				required
			/>
			<label for="VehicleType" class="block text-sm font-medium text-gray-700">Vehicle Type</label>
			<select
				name="VehicleType"
				id="VehicleType"
				required
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			>
				<option value="1">Auto</option>
				<option value="2">Boat</option>
				<option value="3">Airplane</option>
			</select>
			<label for="Year" class="block text-sm font-medium text-gray-700">Year</label>
			<input
				type="number"
				name="Year"
				id="Year"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
				required
			/>
			<label for="Model" class="block text-sm font-medium text-gray-700">Model</label>
			<input
				type="text"
				name="Model"
				id="Model"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
				required
			/>
			<label for="Color" class="block text-sm font-medium text-gray-700">Color</label>
			<input
				type="text"
				name="Color"
				id="Color"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			/>
			<label for="Color2" class="block text-sm font-medium text-gray-700">Secondary Color</label>
			<input
				type="text"
				name="Color2"
				id="Color2"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			/>
			<label for="FuelType" class="block text-sm font-medium text-gray-700">Fuel Type</label>
			<select
				name="FuelType"
				id="FuelType"
				required
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			>
				<option value="1">Unleaded</option>
				<option value="2">Diesel</option>
				<option value="3">Electric</option>
				<option value="4">AvGas</option>
				<option value="5">JetA</option>
			</select>
			<label for="RegistrationNumber" class="block text-sm font-medium text-gray-700"
				>Registration Number</label
			>
			<input
				type="text"
				name="RegistrationNumber"
				id="RegistrationNumber"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
				required
			/>
			<label for="RegistrationExpiration" class="block text-sm font-medium text-gray-700"
				>Registration Expiration</label
			>
			<input
				type="date"
				name="RegistrationExpiration"
				id="RegistrationExpiration"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
				required
			/>
			<label for="MaximumPassengers" class="block text-sm font-medium text-gray-700"
				>Maximum Passengers</label
			>
			<input
				type="number"
				name="MaximumPassengers"
				id="MaximumPassengers"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			/>
			<label for="AssessedValue" class="block text-sm font-medium text-gray-700"
				>Assessed Value</label
			>
			<input
				type="number"
				name="AssessedValue"
				id="AssessedValue"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			/>
			<label for="NumberOfDoors" class="block text-sm font-medium text-gray-700"
				>Number of Doors</label
			>
			<input
				type="number"
				name="NumberOfDoors"
				id="NumberOfDoors"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			/>
			<label for="RegistrationState" class="block text-sm font-medium text-gray-700"
				>Registration State</label
			>
			<input
				type="text"
				name="RegistrationState"
				id="RegistrationState"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			/>
			<div class="mt-4">
				<label class="inline-flex items-center">
					<input
						type="radio"
						name="Inspected"
						bind:group={inspected}
						value="true"
						class="form-radio"
					/>
					<span class="ml-2">Yes</span>
				</label>
				<label class="inline-flex items-center">
					<input
						type="radio"
						name="Inspected"
						bind:group={inspected}
						value="false"
						class="form-radio"
						checked
					/>
					<span class="ml-2">No</span>
				</label>
			</div>
			<label for="EngineCylinders" class="block text-sm font-medium text-gray-700"
				>Engine Cylinders</label
			>
			<input
				type="number"
				name="EngineCylinders"
				id="EngineCylinders"
				class="w-full rounded-none border border-black px-2 outline-none focus:border-indigo-600"
			/>
			<div class="my-2 flex justify-center gap-2">
				<Button type="submit" text="Save" color="blue" />
			</div>
		</form>
	{/if}
</div>
