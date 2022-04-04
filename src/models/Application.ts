export interface Client {
  id: number;
  name: string;
  phoneNumber: string;
}
export enum ServiceCategory {
  packages,
  general,
  hardware,
  software,
}
export interface Service {
  id: number;
  name: string;
  price: number;
  category: ServiceCategory;
}
export interface Accessory {
  id: number;
  name: string;
  image: string;
  price: number;
  status: boolean;
}
export enum ExecutionStatus {
  wait,
  arrived,
  lateness,
  started,
  complete,
}
export enum Type {
  active,
  free,
  express,
}
export enum Tags {
  new,
  warranty,
  repeat,
  hardware,
  software,
}
export interface Application {
  id: number;
  time: number;
  workTime: number;
  type: Type;
  tags: Tags;
  executionStatus: ExecutionStatus;
  address: string;
  addressRefined: string;
  coords: number[] | string;
  client: Client;
  clientId: number;
  userId: number;
  price: number;
  description: string;
  services: number[];
  accessories: number[];
}
