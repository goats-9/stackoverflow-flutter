const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
// const router = require('./router');

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log("Listening to the server on port " +  port)});
// app.set('view engine', 'ejs');

//home route
app.get('/', (req, res) => {
    res.render('login_page');
})

//load static assets
// app.use('/static', express.static(path.join(__dirname, 'public')))  
// app.use(session({
//     secret: uuidv4(),
//     resave: false,
//     saveUninitialized: true
// }));

// app.use('/route',router);
