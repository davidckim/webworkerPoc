// Listen for messages from the main thread
self.onmessage = function (event) {
  console.log("Worker received:", event.data);

  // Let's simulate some delay (e.g., computational task)
  setTimeout(() => {
    // Send a message back to the main thread
    self.postMessage("Hello from Web Worker after 3 seconds!");
  }, 3000);
};

console.log("Worker started...");
