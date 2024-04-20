// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}
export interface Manufacturer {
	Id: string;
	Name: string;
	CountyOfOrigin: string;
}

export interface Vehicle {
	Id: string;
	VehicleType: number;
	Year: number;
	Model: string;
	Color: string;
	Color2: string;
	FuelType: number;
	RegistrationNumber: string;
	RegistrationExpiration: string;
	MaximumPassengers: number;
	AssessedValue: number;
}

export {};
