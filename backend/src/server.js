import "dotenv/config";
import app from './app.js'
import { connectDB } from './db.js';

const PORT = process.env.PORT || 5001

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`API running on http://localhost:${PORT}`)
    });
});
