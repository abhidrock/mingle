import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
    city: string;
    state: IState;
    orders?: IOrder[];
    orderTotal?: number;
    latitude?: number,
    longitude?: number
}

export interface IState {
    abbreviation: string;
    name: string;
}

export interface IOrder {
    productName: string;
    itemCost: number;
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IApiResponse {
    status: boolean;
    error?: string;
}
export interface Card {
   name:string,
  description:string,
  card_type:string ,
   number :number,
   project:number,
  id:number ,
    version:number,
    project_card_rank:number,
    created_on:string,
   modified_on:string,
  modified_by:string ,
  created_by:string ,
  properties:Properties,
  tags:string ,
  rendered_description:string ;

}
export interface Properties {
  property: Property[];
}
export interface Property {
  name: string,
  value:string;
}
