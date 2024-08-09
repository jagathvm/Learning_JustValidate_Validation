import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Initialize the Express application
const app = express();
const PORT = 5000;

// Determine the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the 'public' directory
app.use(
  express.static(path.join(__dirname, 'public'))
);

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Define a route to render the 'form-login' view
app.get('/', (req, res) => {
  res.status(200).render('form-login');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}`
  );
});
