const express = require("express");

const router = express.Router();

const { sayHello } = require("../../controllers/sayActions");

router.get("/", sayHello);
/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const programRouter = require("./programs/router");

router.use("/programs", programRouter);

/* ************************************************************************* */

module.exports = router;
