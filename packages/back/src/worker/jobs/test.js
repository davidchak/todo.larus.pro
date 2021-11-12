const { v4: uuidv4  } = require("uuid");
const moment = require("moment");
const child_process = require('child_process');
const path = require("path");



const child = child_process.execFile('python', [path.resolve(__dirname, 'test.py'), [1, 2, 3, 4], JSON.stringify({"test": "ping"})], (err, stdout, stderr) => {
  if (err) {
    console.log(`Task ${uuidv4()} complete at ${moment().format('HH:mm:ss')} with error: ${err}`);
    return;
  }

  console.log(`Task ${uuidv4()} complete at ${moment().format('HH:mm:ss')} with result ===> ${stdout}`);
});
