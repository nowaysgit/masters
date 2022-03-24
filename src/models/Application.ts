export interface Client {
    id: number,
    name: string,
    phoneNumber: string,
}
export interface Service {
    id: number,
    name: string,
    price: number
}
export interface Accessory {
    id: number,
    name: string,
    image: string,
    price: number,
    status: boolean
}
export interface Application {
    id: number,
    time: number,
    address: string,
    coords: number[] | string,
    client: Client,
    price: number,
    description: string,
    services: Service[],
    accessories: Accessory[]
}