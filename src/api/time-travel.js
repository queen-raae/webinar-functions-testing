const CORRECT_YEAR = "2026";
const CORRECT_CITY = "OSLO";

export default function handler(req, res) {
  const { year, city } = req.body;

  let message = `You time-traveled to ${city}, in the year ${year}, `;

  try {
    if (year && city) {
      if (
        city.trim().toUpperCase() === CORRECT_CITY &&
        year.trim() === CORRECT_YEAR
      ) {
        message += `where you found the princess!`;
      } else {
        message += `where you did NOT find the princess!`;
      }
      res.send(message);
    } else {
      const errorMessage = "Invalid body params";
      console.warn(errorMessage);
      res.status(422).json({ message: errorMessage });
    }
  } catch (error) {
    console.warn(error.message);
    res.status(500).json({ message: "Faulty TimeShip!" });
  }
}
