const mongoose= require("mongoose");
const ContactSchema=mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    tanggalLahir:{
        type: String,
        required: true,
    },
    jenisKelamin: String,
    hobi: String,
    create_data:{
        type: Date,
        default:Date.now,
    },

});

const Contact=module.exports=mongoose.model('contact',ContactSchema);
module.exports.get=function(callback,limit){
    Contact.find(callback).limit(limit);
}