const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4000;

require('dotenv').config();

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/main_layout');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ limit: '60mb', extended: false }));

// Generate a secret key

// Global Variables using custom middleware
app.use("/", require('./routes/masterRoute.js'))
app.listen(PORT, async (err) => {
    if (err) throw err;
    else {
        await console.log(`server running on port http://localhost:${PORT}`);
    }
});
