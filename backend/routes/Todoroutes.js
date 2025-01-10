const {Router}=require("express");
const { getToDO, postToDO,ChangeToDO, DeleteToDO } = require("../controllers/Todocontroller");

const router=Router()

router.get('/',getToDO);

router.post('/create',postToDO);

router.put('/update/:id',ChangeToDO);

router.delete('/delete/:id',DeleteToDO);

module.exports=router;