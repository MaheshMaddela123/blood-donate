const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create an instance of Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const DB_URI =
  "mongodb+srv://maddelamaheshbabu1234:Maddela1234@cluster1.iti8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
  })
  .then(() => console.log("✅ Connected to MongoDB successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// Define the donor schema
const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  village: String,
  mandal: String,
  district: String,
  state: String,
});

// Create the donor model
const Donor = mongoose.model("Donor", donorSchema);

// Routes
// Health Check Route
app.get("/", (req, res) => {
  res.status(200).send("🌟 Server is running and healthy!");
});

// Fetch Donors Route
app.get("/donors", async (req, res) => {
  const { state, district, bloodGroup } = req.query;

  console.log("Received Query Parameters:", { state, district, bloodGroup });

  try {
    // Build query dynamically based on provided criteria
    const query = {};
    if (state) query.state = { $regex: state, $options: "i" }; // Case-insensitive regex
    if (district) query.district = { $regex: district, $options: "i" };
    if (bloodGroup) query.bloodGroup = bloodGroup;

    console.log("Constructed Query:", query);

    // Fetch donors from the database
    const donors = await Donor.find(query);

    if (donors.length === 0) {
      console.warn("No donors found matching the query.");
    }

    res.status(200).json(donors); // Respond with fetched donors
  } catch (error) {
    console.error("Error fetching donors:", error.message);
    res.status(500).json({
      error: "Failed to fetch donors",
      details: error.message,
    });
  }
});

// Add Donor Route (POST /donate)
app.post("/donate", async (req, res) => {
  const { name, phone, email, bloodGroup, village, mandal, district, state } = req.body;

  console.log("Received Donation Request:", req.body);

  // Validate required fields
  if (!name || !phone || !email || !bloodGroup) {
    return res.status(400).json({
      error: "Missing required fields: name, phone, email, bloodGroup",
    });
  }

  try {
    // Create a new donor document
    const newDonor = new Donor({
      name,
      phone,
      email,
      bloodGroup,
      village,
      mandal,
      district,
      state,
    });

    // Save to the database
    await newDonor.save();

    console.log("New donor saved successfully:", newDonor);

    res.status(201).json({
      message: "Donor added successfully",
      donor: newDonor,
    });
  } catch (error) {
    console.error("Error adding donor:", error.message);
    res.status(500).json({
      error: "Failed to add donor",
      details: error.message,
    });
  }
});

// Handle Unmatched Routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
