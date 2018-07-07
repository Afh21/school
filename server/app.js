var express     = require('express')
var mongoose    = require('mongoose')
var cors        = require('cors')
var bodyParser  = require('body-parser')
var morgan      = require('morgan')
var app         = express()

// Database
mongoose.connection.openUri('mongodb://localhost:27017/school', 
(error, response) => {
    if(error) throw error;
    console.log('Database: \x1b[32m%s\x1b[0m',' Online');
})

// Middleware
app.use(cors({ 
    origin: "http://localhost:4200", 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true }))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
// app.use(morgan('combined'))

// Import Routes
const loginRoutes   = require('./routes/login')
const userRoutes    = require('./routes/user-route')

// Routes
app.use('/login', loginRoutes);
app.use('/dashboard/users', userRoutes);

app.get('/', (req, res) => { res.send('Ok in index'); } )


// Settings
app.set('port', process.env.PORT || 3000);

// Start Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})