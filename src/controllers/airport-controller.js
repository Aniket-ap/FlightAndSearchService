const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airport = await airportService.createAirport(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create Airport",
      err: error,
    });
  }
};

const remove = async (req, res) => {
  try {
    const response = await airportService.deleteAirport(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to remove airport",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await airportService.updateAirport(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully update the airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update airport",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await airportService.getAirport(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully get the airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the airport",
      err: error,
    });
  }
};

module.exports = {
  create,
  remove,
  update,
  get
};
