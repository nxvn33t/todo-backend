import {app} from "./app.js";
import {connectdb} from "./data/database.js";

connectdb();
// console.log(process.env.DATABASE_URL);
app.listen(process.env.PORT, ()=>{
    console.log(`Server Has started on port :${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
});