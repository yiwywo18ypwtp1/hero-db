import express from 'express'
import cors from 'cors'
import heroRouter from './routes/heroes.router.js';

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
}));

app.use(express.json());
app.use("/heroes", heroRouter);
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
    res.json({ status: "API is running" })
});

export default app