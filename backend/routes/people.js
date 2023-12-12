const express = require ("express")
const router = express.Router()
const peopleCtrl = require ("../controllers/people.js")



// controller import
const peopleCtrl = require('../controllers/people')

// People API - index (GET) - /people/
router.get("/", peopleCtrl.index);

// People API - create (POST) - /people/
router.post("/", peopleCtrl.create);

// People API - show (GET) - /people/:id
router.get("/:id", peopleCtrl.show);

// People API - destroy (DELETE) - /people/:id
router.delete("/:id", peopleCtrl.delete);

// People API - update (PUT) - /people/:id
router.put("/:id", peopleCtrl.update);

module.exports = router;