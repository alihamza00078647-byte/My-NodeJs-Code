const path = require('node:path');

// External Module
const express = require('express');
const app = express();

// Local Module
const userRouter = require('./Router/userRouter.js');
const hostRouter = require('./Router/hostRouter.js');
const rootDir = require('./utils/path_utils.js');

// Reduce the headache
app.use(express.urlencoded());
app.use(userRouter);
// Common Path Gives Here.
app.use("/host", hostRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});