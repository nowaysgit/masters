import { createStore } from "vuex";
import { MapModule, MapState } from "@/store/MapModule";
import { ApplicationModule, ApplicationState } from "@/store/ApplicationModule";
import { ServiceModule, ServiceState } from "@/store/ServiceModule";
import { AccessoryModule, AccessoryState } from "@/store/AccessoryModule";
import { UserModule, UserState } from "@/store/UserModule";

export interface RootState {
  map: MapState;
  application: ApplicationState;
  service: ServiceState;
  accessory: AccessoryState;
  user: UserState;
}

export const store = createStore<RootState>({
  modules: {
    map: MapModule,
    application: ApplicationModule,
    service: ServiceModule,
    accessory: AccessoryModule,
    user: UserModule,
  },
});
