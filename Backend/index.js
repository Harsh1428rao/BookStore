import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from "./Route/user.route.js";
import itemRoutes from "./Route/itemRoutes.js"; // Corrected route import

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((error) => {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1);
});

// Routes
app.use("/book", itemRoutes); // Corrected API path
app.use('/user',authRoutes);
app.get('/', (req, res) => {
    res.send("🚀 Server is running...");
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
