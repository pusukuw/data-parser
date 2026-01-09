// types.ts

import { string } from 'prop-types';

export interface Data {
  id: number;
  name: string;
  description: string;
  age: number;
  email: string;
}

export interface Person extends Data {
  occupation: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}

export interface Company extends Data {
  phone: string;
  website: string;
}

export interface Employee extends Person, Company {}

export interface Customers extends Person, Company {}

export type DataItem = Person | Company;

export enum ItemType {
  PERSON,
  COMPANY,
}