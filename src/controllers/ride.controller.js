const { findNearbyDrivers } = require('../services/ride.service');

async function requestRide(req, res) {
  try {
    const { user_id, pickup_lat, pickup_lng, radius_km } = req.body;

    if (!user_id || !pickup_lat || !pickup_lng || !radius_km) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const drivers = await findNearbyDrivers(
      pickup_lat,
      pickup_lng,
      radius_km
    );

    return res.json({
      success: true,
      available_drivers: drivers
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
}

module.exports = { requestRide };
