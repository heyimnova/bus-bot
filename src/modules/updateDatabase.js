const busModel = require("../models/bus");

module.exports = {
  initialiseBusCollection: async (buses) => {
    for (const bus of buses) {
      if (!(await busModel.findById(bus._id))) {
        try {
          await bus.save();
          console.log(`Bus ${bus._id} added to database`);
        } catch (err) {
          console.error(err);
        }
      }
    }
    // Match all buses and set their locations to ' '
    await busModel.updateMany({}, { location: " " });
  },
  updateBusLocations: async (buses) => {
    for (const bus of buses) {
      if ((await busModel.findById(bus._id)).location !== bus.location) {
        try {
          // Match the bus with the _id of bus._id and set its location to bus.location
          await busModel.updateOne(
            { _id: bus._id },
            { location: bus.location }
          );
        } catch (err) {
          console.error(err);
        }
      }
    }
  },
};
