import Papa from "papaparse";

self.addEventListener("message", (event) => {
  const { file } = event.data;

  const reader = new FileReader();
  reader.onload = function (e) {
    const data = e.target.result;
    const parsedData = Papa.parse(data, { header: true, skipEmptyLines: true });
    self.postMessage(parsedData.data);
  };

  reader.onerror = function () {
    throw new Error("Error reading file");
  };

  reader.readAsText(file);
});
