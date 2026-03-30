// External Module
const express = require('express');


// local Module
const userRouter = require('./Router/userRouter.js')
const hostRouter = require('./Router/hostRouter.js')
const rootDir = require('./utils/pathUtils.js');

// Core Module
const path = require('path');
const app = express();

app.use(userRouter);

app.use(express.urlencoded());
app.use(hostRouter);


app.use((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});