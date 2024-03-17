const express = require('express')
const { comparePassword } = require('../helper/authHelper')
const Router = express.Router()

module.exports = (conn) => {
    // console.log('reached here')
    Router.post('/', (req, res) => {
        try {
            const { email, password, type } = req.body
            let sql = `SELECT * FROM ${type} WHERE email = '${email}';`
            conn.query(sql, async (error, result) => {
                if (error) res.status(400).send(error)
                else if (result.length == 0)
                    res.send({ status: false, message: "Invalid email" })
                else {
                    //password matching
                    const match = await comparePassword(password, result[0].password);
                    if (!match) {
                        return res.status(200).send({
                            status: false,
                            message: 'Incorrect Password'
                        })
                    }
                    else {
                        delete result[0].password;
                        res.send({ status: true, content: { ...result[0], "type": type } })
                    }

                }
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({
                success: false,
                message: "Error in registration",
                error
            })
        }

    })
    return Router
}


