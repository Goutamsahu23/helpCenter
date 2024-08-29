const express = require('express');
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.use(express.json());
const database = require("./db/db");
const cors = require('cors');
app.use(cors());
// connect db
database.connect()

// import routes
const helpCenterRoutes = require('./routes/helpCenterRoute');
app.use('/api/v1',helpCenterRoutes);

app.get('/ping', (req, res) => {
    res.send('Server is running');
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
