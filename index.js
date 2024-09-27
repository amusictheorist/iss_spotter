const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

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

const coords = { latitude: 43.653226, longitude: -79.3831843 };

fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Returned flyover times: ", flyOverTimes);
});