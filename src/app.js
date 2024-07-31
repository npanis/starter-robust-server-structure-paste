const express = require("express");
const app = express();
const pastes = require("./data/pastes-data"); // Reads, executes, and returns the exports object from the ./data/pastes-data file, assigning it to a variable

//Get specific data per id
app.use("/pastes/:pasteId", (req, res, next) => {
  const { pasteId}  = req.params;
  const foundPaste = pastes.find((paste) => paste.id === Number(pasteId));

  console.log(pasteId, foundPaste);
  if (foundPaste) {
    res.json({ data: foundPaste });
  } else {
    next(`Paste id not found: ${pasteId}`);
  }
});

//Defines a handler for the /pastes path
app.use("/pastes", (req,res) => { 
  res.json( { data: pastes }); //Defines a handler for the /pastes path
});



// Not found handler
app.use((request, response, next) => {
  next(`Not found: ${request.originalUrl}`);
});

// Error handler
app.use((error, request, response, next) => {
  console.error(error);
  response.send(error);
});

module.exports = app;
