import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(
  express.static(path.join(__dirname, 'public'))
);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.status(200).render('form-login');
});

app.listen(PORT, () => {
  console.log(
    `server up at http://localhost:${PORT}`
  );
});
