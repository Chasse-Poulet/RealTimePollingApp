const { WebSocketServer } = require("ws");

const server = new WebSocketServer({ port: 8080 });

server.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("error", console.error);

  ws.on("message", (message) => {
    console.log("Received: %s", message);
    ws.send("Hello Client! Pong!");
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
