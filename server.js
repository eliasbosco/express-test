const express = require('express');
const cors = require('cors');
const app = express();

require('./src/routes/index')(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.listen(3000);

const dbConfig = require('./src/config/db');
const db = require('./src/models');

db.mongoose
.connect(`mongodb+srv://${dbConfig.USERNAME}:${dbConfig.PASSWORD}@${dbConfig.HOST}/${dbConfig.DB}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
