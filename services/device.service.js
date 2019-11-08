var deviceRepository = require('../db/repositories/DeviceRepository');
var models = require('../db/models/index');
module.exports = {

    createDevice() {
        deviceRepository.create_device();
        return 0;
    },
    updateDevice() {
        deviceRepository.update_device();
        return 0;
    },
    deleteDevice() {
        deviceRepository.delete_device();
        return 0;
    },
    listDevices(cb) {
        models.Devices.findAll().then(devices => {
            if (devices) {
                return cb(null, devices);
            } else {
                return cb("Error: getting the device.", null);
            }
        });
    },
    getDeviceById(deviceId, cb) {
        models.Devices.findAll({ where: { id: deviceId } }).then(device => {
            if (device) {
                return cb(null, device);
            } else {
                return cb("Error: getting the device.", null);
            }
        });

    }
}