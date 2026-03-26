import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', contactRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Webforge API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
