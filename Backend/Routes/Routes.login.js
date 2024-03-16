const express = require('express')
const Router = express.Router()

module.exports = (conn) => {
    // console.log('reached here')
    Router.post('/', (req, res) => {
        const { email, type } = req.body
        let sql = `SELECT * FROM ${type} WHERE email = '${email}';`
        conn.query(sql, (error, result) => {
            if (error) res.status(400).send(error)
            else if(result.length==0)
            res.send('Invalid email')
            res.send(['Verified', result[0]])
        })
        // if (type == 'doctor') {
            
        // }

    })
    return Router
}