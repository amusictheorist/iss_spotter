const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// Fetch the IP address first
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);

//   // Now fetch coordinates by IP
//   fetchCoordsByIP(ip, (error, coordinates) => {
//     if (error) {
//       console.log("It didn't work!", error);
//       return;
//     }

//     console.log('It worked! Returned coordinates:', coordinates);
//   });
// });

// Now fetch the flyover times based on coordinates
// const coords = { latitude: 43.653226, longitude: -79.3831843 };

// fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned flyover times: ", flyOverTimes);
// });

// Now chain all API requests into a single function
const printFlyOverTimes = function (flyOverTimes) {
  for (const flyover of flyOverTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(flyover.risetime);
    const duration = flyover.duration;
    console.log(`Next flyover at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, flyOverTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  printFlyOverTimes(flyOverTimes);
});
module.exports = { printFlyOverTimes };