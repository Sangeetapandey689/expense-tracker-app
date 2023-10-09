const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/db');
const User = require('./models/userModels'); // Import your user model

const app = express();
const port = 3004;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// API endpoint for user login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the password matches (you should hash and compare passwords)
    if (password !== user.password) {
      return res.status(401).json({ error: 'User not authorized' });
    }

    // Password matches, send success message
    return res.status(200).json({ message: 'User login successful' });
  } catch (error) {
    console.error('Database query error: ' + error.message);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

