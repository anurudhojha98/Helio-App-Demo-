
var deviceController = require('../controllers').deviceController;

module.exports = (app,router) => {

    router.post('/createDevice', deviceController.createDevice);

    router.get('/getDevices', deviceController.listDevices);

    router.get('/getDevice/:id', deviceController.getDeviceById);

    router.put('/updateDevice/:id', deviceController.updateDevice);

    router.delete('/deleteDevice/:id', deviceController.deleteDevice);
 
    app.use('/api',router)

};