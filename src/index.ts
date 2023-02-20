import express, { Express } from 'express';

import StatesController from './controllers/StatesController';

const app: Express = express();
app.use(express.json());

const PORT = 8191;

app.get('/capital', StatesController.getCapital);
app.post('/capital', StatesController.addCapital);

app.listen(PORT, () => console.log(`Listening on port http://127.0.0.1:${PORT}`));
