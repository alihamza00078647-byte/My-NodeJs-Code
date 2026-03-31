// External Module
const express = require('express');

// Core Modules
const path = require('path');
// Local Modules
const rootDir = require('./Utils/pathUtils.js');
const userRouter = require('./Routers/userRouter.js');
const hostRouter = require('./Routers/hostRouter.js');

const app = express();

app.use(userRouter);
app.use(hostRouter);

app.use(express.urlencoded());

// Granting Access to public folder
app.use(express.static(path.join(rootDir, 'public')));

app.use((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '404Page.html'));
});



const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server Runing at http://localhost:${PORT}`);
});



