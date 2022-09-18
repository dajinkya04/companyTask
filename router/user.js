
const express = require('express');
const userRouter = express.Router();

const client = require('../db/conn');
const db = client.getDb();

const collectionName = 'usercollection';

// user profile registration
userRouter.post('/registeruser', async (req, res) => {
    const userCollection = await db.collection(collectionName);
    userCollection.findOne({ useremail: req.body.useremail }, (err, result) => {
        if (err) throw err;
        if (!result) {
            userCollection.insertOne({
                username: req.body.username,
                useremail: req.body.useremail,
                userage: req.body.userage,
                userType: req.body.userType,
                userMobile: req.body.userMobile,
                userpassword: req.body.userpassword,
            }, (err, result) => {
                if (err) throw err;
                res.json({
                    msg: "User Registred Successfull!",
                    username: req.body.username,
                    useremail: req.body.useremail,
                    userage: req.body.userage,
                    userMobile: req.body.userMobile,
                    userpassword: req.body.userpassword
                })
            })
        } else {
            res.json({ msg: "Email address already Registred!" })
        }
    })
})

// user login with email and password
userRouter.post('/login', async (req, res) => {
    const userCollection = await db.collection(collectionName);
    userCollection.findOne({ useremail: req.body.useremail }, (err, result) => {
        if (err) throw err;
        if (result) {
            console.log(result);
            if (result.userpassword == req.body.userpassword) {
                // console.log(result);
                res.json({ msg: "success login user", result })
            }
            else {
                res.json({ msg: "Please enter valid Email and Password!" })
            }
        }
        else {
            res.json({ msg: "User is not exists!" })
        }
    })

})

// Get one User details using params Useremail
userRouter.get('/getporfile/:useremail', async (req, res) => {
    const useremail = req.params.useremail;
    const userCollection = await db.collection(collectionName);
    userCollection.findOne({ useremail: useremail }, (err, result) => {
        if (err) throw err;
        if (result) {
            res.json({ msg: "success get User details", result })
        } else {
            res.json({ msg: "user not find!" })
        }
    })

})



module.exports = userRouter;
