const app = require("./app.js");

require("dotenv").config();

const PORT = process.env.PORT || 1313;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  });