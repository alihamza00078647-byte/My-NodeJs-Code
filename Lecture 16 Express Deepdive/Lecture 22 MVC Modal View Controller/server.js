// External Module
const express = require('express');

// Core Module
const path = require('path');

// Local Module
const rootDir  = require('./utils/path_Utils');
const { userRouter } = require('./Router/userRouter');
const { hostRouter } = require('./Router/hostRouter');
const  homeController  = require('./controllers/homes');
const  errorController  = require('./controllers/errors');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'view');

app.use(express.urlencoded());

app.use(userRouter);
app.use(hostRouter);

app.use(express.static(path.join(rootDir, 'public')));


// Handle 404 PAGE
app.use(errorController.page404);



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
}) 