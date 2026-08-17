import { Router } from "express";
import { addUser, deleteUser, filterAge, getAllUsers, getUserById, getUserByName, updataData } from "./user.service.js";
const router = Router()


// add user to json file 
router.post("/add-user", (req, res) => {
    let data = addUser(req.body)
    res.json(data)
})
// update user 
router.patch("/update-user/:id", (req, res) => {
    let { id } = req.params
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
// get all users 
router.get("/", (req, res) => {
    let data = getAllUsers()
    res.json(data)
})
// get user by age filter 
router.get("/get-user-age-filter/:age", (req, res) => {
    let { age } = req.params

    let data = filterAge(age)
    res.json(data)
})
// get user by id 
router.get("/get-user-byId/:id", (req, res) => {
    let { id } = req.params
    let data = getUserById(id)
    res.json(data)
})
export default router