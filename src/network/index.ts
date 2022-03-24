import axios from "axios";

export const socket = new WebSocket("ws://localhost:5000");
export const http = axios.create({ baseURL: "http://localhost:5000" });

socket.onmessage = function (message) {
  const data = JSON.parse(message.data);
  console.log(data);
};
