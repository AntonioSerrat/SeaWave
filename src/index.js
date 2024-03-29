const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');


//Initialiazations 
const app= express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
})); 
app.set('view engine', '.hbs');

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'seawavefine',
    resave: true,
    saveUninitialized: true,
}));

// Global Variables


// Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));



//Statics Files
app.use(express.static(path.join(__dirname, 'public')));


//Server is Lisening
app.listen(app.get('port'), () =>{
    console.log('Server ON port ', app.get('port'));
});