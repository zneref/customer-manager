export interface Customer {
    name: string;
    photoUrl: string;
    age: number;
    description: string;
    address: Address;
}

export interface Address {
    street: string;
    houseNumber: number;
    city: string;
}