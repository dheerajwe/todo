const express=require("express");
const cors=require("cors");

const mongoose=require("mongoose");

require("dotenv").config()

const app=express();

app.use(express.json());
app.use(cors());
app.use(cors({
    origin: [process.env.LOCAL_FRONTEND_URL, process.env.PROD_FRONTEND_URL]
  }));

const routes=require("./routes/Todoroutes")

const PORT=process.env.port || 5000

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log(`mongoDb connected....`))
.catch((err)=>console.log(err))


app.use(routes);


app.listen(PORT, ()=>console.log(`Listening on :${PORT}`));