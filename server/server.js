import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';
import healthRouter from './routes/healthRoutes.js'; // ✅ NEW LINE

const app = express();

await connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("App is working");
});

app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);
app.use('/api', healthRouter); // ✅ NEW LINE for /api/ping

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("✅ Server is listening on PORT: " + PORT);
});
