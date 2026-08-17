import { Router } from "express";
import { addUser, deleteUser, getUserByName, updataData } from "./user.service.js";
const router = Router()


// add user to json file 
router.post("/add-user", (req, res) => {
    let data = addUser(req.body)
    res.json(data)
})
// update user 
router.patch("/update-user/:id", (req, res) => {
    let { id } = req.params
    console.log(id);
    let data = updataData(id, req.body)
    res.json(data)
})
// delete user by id 
router.delete("/delete-user", (req, res) => {
    let { id } = req.body
    let data = deleteUser(id)
    res.json(data)
})
// get user by name 
router.get("/get-userBy-name", (req, res) => {
    let { name } = req.query
    let data = getUserByName(name)
    res.json(data)
})
export default router