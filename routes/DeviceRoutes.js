
var deviceService = require('../services').deviceService;

module.exports = (app, router) => {

    router.post('/addDevice', deviceService.createDevice);

    router.get('/getDevices', deviceService.listDevices);

    router.get('/getDevice/:id', deviceService.getDeviceById);

    router.put('/updateDevice/:id', deviceService.updateDevice);

    router.delete('/deleteDevice/:id', deviceService.deleteDevice);

    app.use('/api', router)

};