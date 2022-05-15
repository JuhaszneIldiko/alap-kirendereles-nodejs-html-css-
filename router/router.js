const renderMW = require('../middleware/render');
const tesztMW = require('../middleware/teszt');

module.exports = function (app){
    const objRepo = {
        fuelModel:null,
        saveDB:null
    };

    app.get('/', tesztMW(objRepo), renderMW(objRepo, "index"));

    return app; 
}