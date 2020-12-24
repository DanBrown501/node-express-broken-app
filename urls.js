let axios = require("axios");
const fs = require("fs");
const { request } = require("http");
const { url } = require("inspector");

function getUrls(file) {
  fs.readFile(file, "utf8", function (err, data) {
    if (err) {
      console.error("Invalid document, please try another");
      process.exit(1);
    }
    getUrlData(data.split(/[ \r\n]+/));
  });
}

async function getUrlData(urls) {
  let test = urls.filter((c) => c !== "");
  for (d of test) {
    try {
      res = await axios.get(`${d}`);
      fs.writeFile(`${d.split("/")[2]}`, `${res.data}`, "utf8", (err) => {
        if (err) {
          console.log(err);
          process.kill(1);
        }
        console.log(`Wrote to ${d}`);
      });
    } catch (e) {
      console.log(`Couldn't download ${d}`);
    }
  }
}
getUrls("urls.txt");
