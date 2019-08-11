const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.static('client/dist'));

app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));
