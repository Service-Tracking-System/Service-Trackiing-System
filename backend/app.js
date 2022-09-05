const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const Router = require("./router");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api", Router);

const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
