const { PrismaClient } = require('@prisma/client');
const { calculateDistance } = require('../utils/haversine');

const prisma = new PrismaClient();

async function findNearbyDrivers(pickup_lat, pickup_lng, radius_km) {
  const drivers = await prisma.driver.findMany({
    where: {
      is_available: true
    },
    include: {
      car: true
    }
  });

  const nearbyDrivers = drivers
    .map(driver => {
      const distance = calculateDistance(
        pickup_lat,
        pickup_lng,
        driver.current_lat,
        driver.current_lng
      );

      return {
        driver_id: driver.id,
        car_model: driver.car?.model || null,
        distance_km: parseFloat(distance.toFixed(2)),
        location: {
          lat: driver.current_lat,
          lng: driver.current_lng
        }
      };
    })
    .filter(driver => driver.distance_km <= radius_km)
    .sort((a, b) => a.distance_km - b.distance_km);

  return nearbyDrivers;
}

module.exports = { findNearbyDrivers };
