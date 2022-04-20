const express = require('express');
const cors = require('cors');
const TemperatureService = require("./Service/TemperatureService");

const app = express();
const port = 8081;
const service = new TemperatureService()

app.use(cors());

app.get('/temperature/:id', (req, res) => {
   service.getTemperature(req.params.id).then(result=>res.send(result)).catch(error=>res.status(500).send(error))
 });

app.get('/temperature', (req, res) => {
    service.getAllTemperatures().then(result=>res.send(result)).catch(error=>res.status(500).send(error))
});

app.listen(port, () => {
  console.log(`SensorTech server at http://localhost:${port}`);
});
