import dotenv from "dotenv";
dotenv.config();

import cluster from "cluster";
import os, { cpus } from "os";

import app from "./server";

const numCPUs = cpus().length;
import configs from "./utils/constants";
const port = configs.PORT;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // forking the workers

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} exited`);
    
  });
} else {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
