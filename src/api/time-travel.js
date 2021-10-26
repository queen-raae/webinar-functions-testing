const CORRECT_YEAR = 2026;
const CORRECT_CITY = "OSLO";

export default function handler(req, res) {
  try {
    const { city, year } = req.body;
    let message = `You time-travelled to ${city}, in the year ${year},  `;

    if (!city || !year) {
      throw createError(422, "Missing body params");
    }

    if (parseInt(year) === "NaN") {
      throw createError(422, "Year not a number");
    }

    if (typeof city !== "string") {
      throw createError(422, "City not a string");
    }

    if (city && year) {
      if (city.trim().toUpperCase() === CORRECT_CITY && year === CORRECT_YEAR) {
        message += `where you found the princess!`;
      } else {
        message += `where you did NOT find the princess!`;
      }

      res.json({ message });
    } else {
      res.status(422).json({ message: "Invalid body params" });
    }
  } catch (error) {
    let { message, expose, status = 500 } = error;
    console.warn(status, message);
    res.status(status).json({ message: expose ? message : "Faulty TimeShip!" });
  }
}

const createError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  error.expose = true;
  return error;
};
