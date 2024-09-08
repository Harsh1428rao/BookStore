import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from "./Route/user.route.js";

const app = express();
dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 3000;
const URI = process.env.MongodbURI;

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Connect to MongoDB
mongoose.connect(URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));

// Routes
app.get('/', (req, res) => {
    res.send("Hello 345 world");
});

// User routes
app.use("/user", userRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
