const db = require('./dbConfig');



function sell(newVehicle){
    return db.insert({
         Make: `${newVehicle.Make}`,
         Model: `${newVehicle.Model}`,
         VIN: `${newVehicle.VIN}`,
         Mileage: `${newVehicle.Mileage}`,
         titleIsClean: newVehicle.titleIsClean
     })
     .into('car-dealer');
 }
module.exports = {
    sell
}