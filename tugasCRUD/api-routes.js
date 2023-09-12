const express= require('express')
const router = express.Router();

router.get("/",(req,res)=>{
    res.json({
        status: 'API Its working',
        message: "welcome to resthub backend app"
    }
       
    );
});

const connectController=require("./siswaController");

router.route("/siswa")
.get(connectController.index)
.post(connectController.new);

router.route("contacts/:contact_id")
.get(connectController.view)
.patch(connectController.update)
.put(connectController.update)
.delete(connectController.delete)
module.exports= router;