const express = require('express');
const cors = require('cors');
const { infoSolicitud } = require('./middleware/infoSolicitud.middleware');

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api', infoSolicitud, require('./routes/api'));

module.exports = app