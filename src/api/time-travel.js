const CORRECT_YEAR = "2026";
const CORRECT_CITY = "OSLO";

export default function handler(req, res) {
  try {
    const { city, year } = req.body;
    let message = `You time-travelled to ${city}, in the year ${year},  `;

    if (city.trim().toUpperCase() === CORRECT_CITY && year === CORRECT_YEAR) {
      message += `where you found the princess!`;
    } else {
      message += `where you did NOT find the princess!`;
    }

    res.json({ message });
  } catch (error) {
    console.warn(error.message);
    res.status(500).json({ message: "Faulty TimeShip!" });
  }
}
