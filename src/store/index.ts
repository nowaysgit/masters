import { createStore } from "vuex";
import { MapModule, MapState } from "@/store/MapModule";
import { ApplicationModule, ApplicationState } from "@/store/ApplicationModule";
import { ServiceDateModule, ServiceDateState } from "@/store/ServiceDate";

export interface RootState {
  map: MapState;
  application: ApplicationState;
  serviceDate: ServiceDateState;
}

export const store = createStore<RootState>({
  modules: {
    map: MapModule,
    application: ApplicationModule,
    serviceDate: ServiceDateModule,
  },
});
