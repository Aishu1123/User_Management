const express = require("express");
const PORT = 4500;
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");



const app = express();
app.use(express.json());
app.use("/", userRouter);



app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`server is running at http://localhost:${PORT}`);
    console.log(`Database connected`);
  } catch (err) {
    console.log(err);
  }
});
