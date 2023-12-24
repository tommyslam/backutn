const express = require("express");
const app = express();
const cors = require("cors");
const routes = require('./routes/useRoutes');


app.get('/', (req, res) => {
  res.json('Este es el backend');
});
app.use(cors());
app.use(express.json());
app.use("/", routes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`port runing in http://localhost:${port}`);
  });
