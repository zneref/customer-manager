import { InjectionToken } from "@angular/core";

export interface Customer {
    name: string;
    photoUrl: string;
    age: number;
    description: string;
    address: Address;
    type: CustomerType;
    categories: string[];
}

export interface Address {
    street: string;
    houseNumber: number;
    city: string;
}

export enum CustomerType {
    Standard,
    Premium,
    VIP
}

export interface Config {
    customerLimit: number;
    apiUrl: string;
}

export const CONFIG = new InjectionToken<Config>('app.config');