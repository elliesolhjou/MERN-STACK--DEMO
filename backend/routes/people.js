const express = require ("express")
const router = express.Router()
const peopleCtrl = require ("../controllers/people.js")


router.get("/", peopleCtrl.index)
router.post("/", peopleCtrl.create)
router.get("/:id", peopleCtrl.show)
router.put("/:id", peopleCtrl.update)
router.delete("/:id", peopleCtrl.delete)


module.exports = router