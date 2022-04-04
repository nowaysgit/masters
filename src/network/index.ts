import axios from "axios";
import { User } from "@/models/User";
import { Accessory, Application, Client, Service } from "@/models/Application";
import { store } from "@/store";

export const socket = new WebSocket("ws://localhost:5000");
export let isConnected = false;
export const http = axios.create({ baseURL: "http://localhost:5000" });

export interface Data {
  event: Event;
  message: string;
}

socket.onmessage = function (message) {
  const data = JSON.parse(message.data.toString()) as Data;
  console.log(data);
  functions.run(data.event, data.message);
};

socket.onopen = function (message) {
  isConnected = true;
};

socket.onclose = function (message) {
  isConnected = false;
  console.log("Socket упал(");
};

socket.onerror = function (message) {
  console.log("Socket ОШИБКА!");
};

export enum Event {
  getUser = "getUser",
  getClient = "getClient",
  getServices = "getServices",
  getAccessory = "getAccessory",
  getApplication = "getApplication",
  getAvailable = "getAvailable",
  takeApplication = "takeApplication",
  startApplication = "startApplication",
  completeApplication = "completeApplication",
  canselApplication = "canselApplication",
  takenApplication = "takenApplication",
  newApplication = "newApplication",
}

export const Send = async (event: Event, message: any) => {
  waitForConnection(async function () {
    await socket.send(
      JSON.stringify({
        event: event,
        message: {
          userId:
            store.state.user.user !== null ? store.state.user.user?.id : 1,
          data: message,
        },
      })
    );
    return true;
  }, 1000);
};
export const waitForConnection = (callback, interval) => {
  if (socket.readyState === 1) {
    callback();
  } else {
    setTimeout(function () {
      waitForConnection(callback, interval);
    }, interval);
  }
};

class Functions {
  run(name: string, param: any) {
    if (this) {
      this[name](param);
    }
  }

  //Get data methods
  async getUser(user: User) {
    if (user.currentApplicationId && user.currentApplicationId !== 0) {
      await Send(Event.getApplication, user.currentApplicationId);
    }
  }
  async getClient(client: Client) {
    console.log(client);
  }
  async getServices(servicies: Service[]) {
    store.commit("updateServices", servicies);
  }
  async getAccessory(accessory: Accessory) {
    store.commit("addAccessory", accessory);
  }
  async getApplication(application: Application) {
    store.commit("updateCurrent", application);
    await store.dispatch("startTimer");
    //NEED GET USER COORDS
    store.commit("updateRoute", {
      start: [52.290196, 104.301334],
      end: application.coords,
    });

    if (application) {
      for (const accessoryId of application.accessories) {
        await Send(Event.getAccessory, accessoryId.toString());
      }
    }
  }
  async getAvailable(applications: Application[]) {
    store.commit("updateAvailable", applications);
  }

  //Application status change methods
  async newApplication(id: number) {
    store.commit("addAvailable", id);
  }
  async takenApplication(id: number) {
    store.commit("removeAvailable", id);
  }
}

const functions = new Functions();
