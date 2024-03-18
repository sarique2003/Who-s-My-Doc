const express = require('express')
const Router = express.Router()

module.exports = (conn) => {
    
    Router.post('/', (req, res) => {
        const date = new Date(); // Current date and time
        const dateString = date.toISOString().split('T')[0]

        const nextWeek = new Date();
        nextWeek.setDate(date.getDate() + 7);
        const nextWeekStirng=nextWeek.toISOString().split('T')[0]
        let { email } = req.body

        //getting the number of slots
        let sql = `SELECT timeslot_start,timeslot_end FROM doctor WHERE email='${email}';`
        conn.query(sql, (error, result) => {
            if (error) res.status(400).send(error)
            doc = result[0]
            let final_slots = []
            for (let i = 0; i < 7; i++)
                final_slots.push(new Array(doc.timeslot_end - doc.timeslot_start).fill(0))
            console.log(final_slots)

            //getting the booked slots
            sql = `SELECT * FROM booking_details WHERE doctor_email='${email}' AND date_of_appointment BETWEEN '${dateString}' AND '${nextWeekStirng}'  GROUP BY date_of_appointment,patient_email,slot_booked`;
            conn.query(sql, (error, result) => {
                if (error) res.status(400).send(error)

                date.setUTCHours(0, 0, 0, 0);
                result.map((res) => {
                    res.date_of_appointment.setUTCHours(0, 0, 0, 0);
                    let val = res.date_of_appointment - date
                    
                    if (val >= 0)
                        final_slots[val / 86400000][res.slot_booked] = 1

                    return 1
                })
                res.send({slots:final_slots,start_time:doc.timeslot_start})
            })
        })


    })
    return Router
}