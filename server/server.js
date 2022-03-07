require('dotenv').config();
const express = require('express');
require('./DB');
const cors = require('cors');
const studentRoute = require('./routes/student-route');
const authRoute = require('./routes/auth-route');
const passport = require("passport");
const path = require('path');

require("./config/passport")(passport);
const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(passport.initialize());
app.use('/auth',authRoute );
app.use('/students',passport.authenticate('jwt',{session:false}) , studentRoute);
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