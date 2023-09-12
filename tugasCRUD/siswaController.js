// const { json } = require("express");

Contact=require("./contactModel")
exports.index=function(req,res){
    Contact.get(function(err,contact){
        if(err){
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status:"success",
            message:"Contact retrieved sucsses",
            data: contact
        })
    })
}
exports.new=function(req,res){
    let contact=new Contact();
    contact.name = req.body.name?req.body.name:contact.name;
    contact.tanggalLahir=req.body.tanggalLahir;
    contact.jenisKelamin=req.body.jenisKelamin;
    contact.hobi= req.body.hobi;
    contact.save()
    .then((data)=>{
        res.json({
            status: "success",
            message:"New contacts created",
            contact:data,
        });
    })
    .catch((err)=>{
        res.status(500).send({
            message:err.message||"internal sever error"
        });
    });

};
exports.view = function(req,res){
    Contact.findById(req.params.contact_id,function(err,contact){
        if(err){
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            message:"contact detail loding",
            data: contact,
        });
    });
};
exports.update=function(req,res){
    Contact.findById(req.params.contact_id,function(err,contact){
        if(err){
            res.json({
                status: "error",
                message:err,
            });
        }
        contact.name = req.body.name?req.body.name:contact.name;
    contact.tanggalLahir=req.body.tanggalLahir;
    contact.jenisKelamin=req.body.jenisKelamin;
    contact.hobi= req.body.hobi;
        contact.save(function(err){
        if(err){
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            message:"contact info update!",
            data: contact,
        });
    });
    })
    
};
exports.delete=function(req,res){
    contact.remove({
        _id:req.params.contact_id
    },function(err,contact){
        if(err)
        res.send(err);
    res.json({
        status:"sucses",
        message:"delete contact sucses"
    })
    })
    
    
};