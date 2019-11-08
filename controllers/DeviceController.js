
var deviceService = require('../services').deviceService;

module.exports = {
    addDevice(req, res) {
        deviceService.createDevice();
        return res.status(200).send("Device saved succesfully.");
    },
    updateDevice(req, res) {
        deviceService.updateDevice();
        return res.status(200).send("Device updated succesfully.");
    },
    deleteDevice(req, res) {
        deviceService.deleteDevice();
        return res.status(200).send("Device saved succesfully.");
    },
    listDevices(req, res) {
        deviceService.listDevices((error, result) => {
            return res.status(200).send(result);
        });
    },
    getDeviceById(req, res) {
        let deviceId = req.query.deviceId;
        deviceService.getDeviceById(deviceId, (error, result) => {
            return res.status(200).send(result);
        });

    }
}