const express = require('express')
const Router = express.Router()

module.exports = (conn) => {
    // console.log('reached here')

    //finding the doctors available
    Router.post('/find-doctor', (req, res) => {
        const { date, location, specialisation } = req.body;

        let sql = `SELECT * FROM Doctor WHERE specialisation = '${specialisation}' AND location = '${location}';`
        let doc_list = []
        conn.query(sql, (error, result) => {
            if (error) res.status(400).send(error)
            doc_list = result

            let final_list = []
            doc_list.map((doc, index) => {
                sql = `SELECT slot_booked FROM booking_details WHERE doctor_email='${doc.email}' AND date_of_appointment='${date}';`
                let arr = new Array(doc.timeslot_end - doc.timeslot_start).fill(1);
                // console.log(arr)
                conn.query(sql, (error, values) => {
                    if (error) res.send(error)
                    // res.send(values)

                    values = values.map((val) => {
                        arr[val['slot_booked']] = 0
                        return val
                    })



                    final_list.push({ ...doc, 'slots': arr })
                    if (index === doc_list.length - 1)
                        res.send(final_list)
                    // console.log(final_list)
                })

            })

        })


    })


    //getting the doctors available
    Router.get('/', (req, res) => {
        // res.send('hi')
        let sql = `SELECT DISTINCT(location) from doctor;`
        conn.query(sql, (error, result) => {
            if (error) res.send(error)
            res.send(result.map(it => it['location']))
        })
    })


    //booking for the doctor
    Router.post('/booking', (req, res) => {

        let sql = `INSERT INTO booking_details VALUES (?,?,?,?);`
        conn.query(sql, Object.values(req.body), (error, result) => {
            if (error) res.status(400).send(error)
            res.send(req.body)
        })


    })
    return Router
}