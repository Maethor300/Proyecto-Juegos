const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const name = require("./useApi.js");
const gender1 = require("./Gender.js")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/games", name)
router.use("/gender", gender1)

module.exports = router;
