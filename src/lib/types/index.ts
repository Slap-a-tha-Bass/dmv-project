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
