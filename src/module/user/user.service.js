//logic files 
import fs from "fs"
import path from "path"
// function to read data from jason file 
let readData = () => {
    return JSON.parse(fs.readFileSync(path.resolve("./src/module/data/user.json"), "utf-8"))
}
// function to write data to json file 
let writeData = (data) => {
    return fs.writeFileSync(path.resolve("./src/module/data/user.json"), JSON.stringify(data), "utf-8")
}
// let add user 
export let addUser = (userData) => {
    let data = readData()
    let { email, age, password, name } = userData
    let findUser = data.find((user) => {
        return user.email == email
    })
    if (findUser) {
        return {
            message: "user already exist"
        }
    } else {
        let id = data.length + 1
        data.push({ id, name, email, password, age })
        writeData(data)
        return {
            message: "user added success.."
        }
    }
}
// update user data 
export let updataData = (userId, userData) => {
    let data = readData()
    let findUser = data.find((user) => {
        return user.id == userId
    })
    if (findUser) {
        let { name, password, email, age } = userData
        name ? findUser.name = name : null
        password ? findUser.password = password : null
        email ? findUser.email = email : null
        age ? findUser.age = age : null
        writeData(data)
        return {
            message: "user data updated successfully. "
        }
    } else {
        return {
            message: "user is not found "
        }
    }

}
// delete user from json 
export let deleteUser = (userId) => {
    let data = readData()
    let userIndex = data.findIndex((user) => {
        return user.id == userId
    })
    if (userIndex >= 0) {
        data.splice(userIndex, 1)
        writeData(data)
        return {
            message: "user deleted successfully.."
        }
    } else {
        return {
            message: "user not found"
        }
    }
}
// get user by name 
export let getUserByName = (userName) => {
    let data = readData()
    let findUser = data.find((user) => {
        return user.name == userName
    })
    if (findUser) {
        return {
            message: "user found",
            userData: findUser
        }
    } else {
        return {
            message: "user name is not found "
        }
    }
}
// get all users from json file 
export let getAllUsers = () => {
    let data = readData()
    if (data) {
        return data
    } else {
        return {
            message: "there is not user in json file "
        }
    }
}
// filter user by min age
export let filterAge = () => {
    return null
}
export let getUserById = (userId) => {
    let data = readData()
    let findUser = data.find((user) => {
        return user.id == userId
    })
    if (findUser) {
        return userId
    } else {
        return {
            message: "user id is not found "
        }
    }
}

