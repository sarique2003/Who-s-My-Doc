const express = require('express')
const Router = express.Router()

module.exports = (conn) => {
    // console.log('reached here')
    Router.post('/', (req, res) => {
        if(req.body.type==='doctor'){
            // const {username,email,name,regno,qualification,}
            const values=req.body
            delete values.type
            // res.send(Object.values(values))
            let sql=`INSERT INTO doctor VALUES (?)`;
            conn.query(sql,[Object.values(values)],(error,result)=>{
                if(error) res.status(400).send(error)
                res.send({status:true,content:values})
            })
        }

        else{
            const values=req.body
            delete values.type
            
            let sql=`INSERT INTO patient VALUES (?)`;
            conn.query(sql,[Object.values(values)],(error,result)=>{
                if(error) res.status(400).send(error)
                res.send({status:true,content:values})
            })
        }

    })
    return Router
}