const { v4: uuidv4  } = require("uuid");
const moment = require("moment");
const { execFile } = require("child_process");
const { parentPort } = require("worker_threads");
const process = require("process");
const path = require("path");


(async () => {
  await execFile('python', [path.resolve(__dirname, 'test.py'), [1, 2, 3, 4], JSON.stringify({"test": "ping"})], (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      console.log(stderr);
      return;
    }

    console.log(`Task ${uuidv4()} complete at ${moment().format('HH:mm:ss')} with result ===> ${stdout}`);
  });
})()
