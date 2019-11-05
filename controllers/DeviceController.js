module.exports={

    createDevice(req,res){
        return res.status(201).send("Device created succssfully");
    },
    updateDevice(req,res){
        return res.status(200).send("Device updated succssfully");
    },
    deleteDevice(req,res){
        return res.status(409).send("Device deletd succssfully");
    },
    listDevices(req,res){
        return res.status(200).send("Device listed succssfully");
    },
    getDeviceById(req,res){
        return res.status(200).send("Device found succssfully");
    }
}