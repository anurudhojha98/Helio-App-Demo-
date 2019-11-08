
var deviceController = require('../controllers/DeviceController');

module.exports = (app, router) => {

    router.post('/device', deviceController.addDevice);

    router.get('/devices', deviceController.listDevices);

    router.get('/device/:id', deviceController.getDeviceById);

    router.put('/device/:id', deviceController.updateDevice);

    router.delete('/device/:id', deviceController.deleteDevice);

    app.use('/api', router)

};