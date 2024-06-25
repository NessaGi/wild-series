const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/programActions");

// Route to get a list of program
router.get("/", browse);

/* ************************************************************************* */

module.exports = router;
