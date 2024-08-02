const router = require("express").Router(); //creates a new instance of Express router.
const controller = require("./pastes.controller"); //imports the /pastes controller that you created earlier.

router.route("/").get(controller.list).post(controller.create); //using route() lets you write the path once, and then link multiple route handlers to that path. /pastes
router.route("/:pasteId")
    .get(controller.read)
    .put(controller.update)
    .delete(controller.delete); // /:pasteId

module.exports = router; //exports the router for use in app.js.