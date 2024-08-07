const express = require("express");
const app = express();
const pastesRouter = require("./pastes/pastes.router"); // import router
const usersRouter = require("./users/users.router");

app.use(express.json());
// GET
app.use("/pastes", pastesRouter); // Note: app.use
app.use("/users", usersRouter);

// Not found handler
app.use((request, response, next) => {
  next(`Not found: ${request.originalUrl}`);
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;

/*
In cases of keys:
const express = require("express");
const app = express();
const users = require("./data/users-data");
const states = require("./data/states-data");

// Return a single user by id from /users/:userId in form of { data: Object }
app.use("/users/:userId", (req, res, next) => {
  const { userId } = req.params;
  const foundUser = users.find((user) => user.id === Number(userId));
  if (foundUser) {
    res.json( { data: foundUser });
  } else {
    next(`User ID not found: ${userId}`);
  }
});

// Return an array of users from /users in form of { data: Array }
app.use("/users", (req, res) => {
  res.json({ data: users});
});

//  Return a single state from /states/:stateCode in the form of { data: { stateCode: String, name: String } }
app.use("/states/:stateCode", (req, res, next) => {
  const { stateCode } = req.params;
  const foundState = states[stateCode];
  if (foundState) {
    res.json( { data: { stateCode: stateCode, name: foundState } });
  } else {
    next(`State code not found: ${stateCode}`);
  }
});

// Return all states from /states in the form of { data: Array }
app.use("/states", (req, res) => {
  res.json({ data: states});
});




// Add not-found handler.
app.use((req, res, next) => {
  next(`Not found: ${req.originalUrl}`);
});
// Add error handler.
app.use((error, request, response, next) => {
  console.error(error);
  response.send(error);
});

module.exports = app;
*/
