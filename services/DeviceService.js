var deviceRepository=require('../db/repositories/DeviceRepository')
var models=require('../db/models/index');
module.exports={

    createDevice(req,res){
        deviceRepository.create_device();
        return res.status(201).send("Device created succssfully");
    },
    updateDevice(req,res){
        deviceRepository.update_device();
        return res.status(200).send("Device updated succssfully");
    },
    deleteDevice(req,res){
        deviceRepository.delete_device();
        return res.status(409).send("Device deletd succssfully");
    },
    listDevices(req,res){
        models.Devices.findAll().then(devices=>{
        return res.status(200).send(devices);
        });
    },
    getDeviceById(req,res){
        //var deviceId=req.query.id;
        models.Devices.findOne().then(devices=>{
            return res.status(200).send(devices);
            });
    }
}