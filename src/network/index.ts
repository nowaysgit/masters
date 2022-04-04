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
}

export const Send = (event: Event, message: string) => {
  waitForConnection(function () {
    socket.send(
      JSON.stringify({
        event: event,
        message: message,
      })
    );
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
  async getUser(message: any) {
    const user = message as User;
    console.log(user);
  }
  async getClient(message: any) {
    const client = message as Client;
    console.log(client);
  }
  async getServices(message: any) {
    const services = message as Service[];
    await store.dispatch("updateServices", services);
    console.log(services);
  }
  async getAccessory(message: any) {
    const accessory = message as Accessory;
    console.log(accessory);
  }
  async getApplication(message: any) {
    const application = message as Application;
    await store.dispatch("takeApplication", application);
    console.log(application);
  }
}

const functions = new Functions();
