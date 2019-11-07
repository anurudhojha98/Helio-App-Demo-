var deviceRepository = require('../db/repositories').deviceRepository;
var models = require('../db/models/index');
var logger = require('../logger')
module.exports = {

    createDevice(req, res) {
        deviceRepository.create_device();
        return res.status(201).send("Device created succssfully");
    },
    updateDevice(req, res) {
        deviceRepository.update_device();
        return res.status(200).send("Device updated succssfully");
    },
    deleteDevice(req, res) {
        deviceRepository.delete_device();
        return res.status(204).send("Device deletd succssfully");
    },
    listDevices(req, res) {
        logger.error("This is list devices error");
        models.Devices.findAll().then(devices => {
            return res.status(200).send(devices);
        });
    },
    getDeviceById(req, res) {
        logger.error("This is get deviceById error");
        let deviceId = req.query.deviceId;
        models.Devices.findAll({ where: { id: deviceId } }).then(devices => {
            return res.status(200).send(devices);
        });
    }
}