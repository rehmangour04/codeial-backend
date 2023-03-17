/** @format */
const express = require("express");
const app = express();
const port = 8000;
app.listen(port, function (err) {
  if (err) {
    console.log(
      `Error while running the server plzz check atleast once again: ${err}`
    );
  }
  console.log(`whoo!!! 🔥😒 Server is runing on port: ${port}`);
});
