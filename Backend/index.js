// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";

// import bookRoute from "./route/book.route.js";
// import userRoute from "./route/user.route.js";

// const app = express();

// app.use(cors());
// app.use(express.json());

// dotenv.config();

// const PORT = process.env.PORT || 4000;
// const URI = process.env.MongoDBURI;

// // connect to mongoDB
// try {
//     mongoose.connect(URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     console.log("Connected to mongoDB");
// } catch (error) {
//     console.log("Error: ", error);
// }

// // defining routes
// app.use("/book", bookRoute);
// app.use("/user", userRoute);

// app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// });



import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config(); // ✅ Load environment variables

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// ✅ Check if MongoDB URI is defined
if (!URI) {
  console.error("❌ MongoDB URI is undefined. Please check your .env file.");
  process.exit(1); // Exit the app
}

// ✅ Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Exit if DB connection fails
  }
};

connectDB(); // Call the DB connect function

// ✅ Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
