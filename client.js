const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:8080");

ws.on("open", () => {
  console.log("Connected to server");
  ws.send("Hello Server! Ping!");
});

ws.on("message", (message) => {
  console.log("Received: %s", message);
});

ws.on("close", () => {
  console.log("Disconnected from server");
});
