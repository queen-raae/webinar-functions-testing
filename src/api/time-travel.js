export default function handler(req, res) {
  const { city } = req.body;
  const { year } = req.body;

  res.send(`You time-traveled to ${city}, in the year ${year}`);
}
