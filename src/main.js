import express from "express"
const app = express()
// importing router from controller file
import userRouter from "./module/user/user.controller.js"
// automatic converting data json 
app.use(express.json())
// use data 
app.use(userRouter)
// add port number to server 
app.listen(3000, () => {
    console.log("server work on port 3000");
})