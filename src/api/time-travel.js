const CORRECT_YEAR = "2026";
const CORRECT_CITY = "Oslo";

export default function handler(req, res) {
  const { year, city } = req.body;

  let message = `You time-traveled to ${city}, in the year ${year}, `;

  if (city === CORRECT_CITY && year === CORRECT_YEAR) {
    message += `where you found the princess!`;
  } else {
    message += `where you did NOT find the princess!`;
  }
  res.send(message);
}
