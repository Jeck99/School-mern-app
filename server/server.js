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

//*****************************************************************/
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }
//*******************************************************************/