import express from 'express';
import { KEYS } from './config/keys.js'
import playerRoutes from './routes/playerRoutes.js'
import teamRoutes from '.routes/teamRoutes.js'
const app = express();

app.use(express.json());

app.use("/players", playerRoutes);

app.use("/teams", teamRoutes);

app.get('/', (req, res) => {
    res.send("api is running");
})

app.listen(KEYS.PORT, () => {
    console.log(`Server running on port ${KEYS.PORT}`);
})