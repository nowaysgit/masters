import { createStore } from "vuex";
import { MapModule, MapState } from "@/store/MapModule";
import { ApplicationModule, ApplicationState } from "@/store/ApplicationModule";

export interface RootState {
  map: MapState;
  application: ApplicationState;
}

export const store = createStore<RootState>({
  modules: {
    map: MapModule,
    application: ApplicationModule,
  },
});
