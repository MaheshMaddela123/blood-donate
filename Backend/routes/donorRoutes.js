router.get("/", async (req, res) => {
  const { state, district } = req.query;

  try {
    const query = {};
    if (state) query.state = { $regex: state, $options: "i" };
    if (district) query.district = { $regex: district, $options: "i" };

    const donors = await Donor.find(query);
    res.status(200).json(donors); // This should send the data back
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "Failed to fetch donors" });
  }
});
