import { Module } from "vuex";
import { RootState } from "@/store";

export interface MapState {
  route: any;
  distance: string;
  duration: string;
}
export interface Coords {
  x: number[] | string;
  y: number[] | string;
}

export const MapModule: Module<MapState, RootState> = {
  state: {
    route: null,
    distance: "",
    duration: "",
  },
  mutations: {
    updateRouteModel(state: MapState, multiRouteModel: any) {
      state.route = multiRouteModel;
    },
    updateDistance(state: MapState, distance: string) {
      state.distance = distance;
    },
    updateDuration(state: MapState, duration: string) {
      state.duration = duration;
    },
  },
  actions: {
    //updateRoute([52.273958, 104.356896], [52.253839, 104.336311])
    //updateRoute("ул. Байкальская, 250А", [52.253839, 104.336311])
    updateRoute(state: any, { x, y }: Coords) {
      state.route.setReferencePoints([x, y]);
    },
  },
};
