require('dotenv').config();
const express = require('express');
require('./DB');
const cors = require('cors');
const studentRoute = require('./routes/student-route');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/students', studentRoute);
app.listen(process.env.PORT)
app.get('/', (req, res) =>res.send('server online!'));