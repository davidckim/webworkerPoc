// Instantiate the Web Worker
const worker = new Worker("./worker.js");

// Send a message to the worker
worker.postMessage("Hello from main thread!");

// Listen for messages from the worker
worker.onmessage = function (event) {
  console.log("Main Thread received:", event.data);
};

// To demonstrate the non-blocking nature, we log something after starting the worker
console.log("Main thread continues its work...");
