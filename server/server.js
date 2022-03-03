require('dotenv').config();
const express = require('express');
require('./DB');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const studentRoute = require('./routes/student-route');
const authRoute = require('./routes/auth-route');
const app = express();

require('./config/passport')(passport);
app.use(passport.initialize());
app.use(cors());
app.use(express.json());
app.use('/students',passport.authenticate('jwt',{session:false}) , studentRoute);
app.use('/auth',authRoute );
app.listen(process.env.PORT)

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