const express = require('express')
const Router = express.Router()

module.exports = (conn) => {
    // const date = new Date(); // Current date and time
    // const dateString = date.toISOString().split('T')[0]
    // console.log(date+7)
    Router.post('/', (req, res) => {
        let { email } = req.body
        let sql = `SELECT * FROM booking_details WHERE doctor_email='${email}' GROUP BY date_of_appointment,patient_email,slot_booked`;
        conn.query(sql, (error, result) => {
            if (error) res.status(400).send(error)
            result = result.map((res)=>{
                return {...res,"date_of_appointment":res['date_of_appointment'].toISOString().split('T')[0]}
            } )
            res.send(result)
        })

    })
    return Router
}