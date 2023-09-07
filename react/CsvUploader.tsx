import React, { useState, useEffect } from "react";

const CsvUploader = () => {
  const [csvData, setCsvData] = useState([]);
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    const workerInstance = new Worker("./csvWorker.js");
    setWorker(workerInstance);

    workerInstance.addEventListener("message", (event) => {
      const parsedData = event.data;
      setCsvData(parsedData);
    });

    return () => {
      workerInstance.terminate();
    };
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && worker) {
      worker.postMessage({ file });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <pre>{JSON.stringify(csvData, null, 2)}</pre>
    </div>
  );
};

export default CsvUploader;
