import { Module } from "vuex";
import { RootState } from "@/store";
import { Service } from "@/models/Application";

export interface ServiceState {
  services: Service[];
}

export const ServiceModule: Module<ServiceState, RootState> = {
  state: {
    services: [],
  },
  mutations: {
    updateServices(state: ServiceState, services: Service[]) {
      state.services = services;
    },
  },
};
