const express=require('express')
const app=express()
const mysql2 = require('mysql2');
const cors=require('cors')
port=3000


app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cors())



const conn = mysql2.createConnection({
    host: '192.168.100.13',
    port: 3306, // Port is specified separately from the host
    user: 'krishnendu19802',
    password: 'Draco1982',
    database: 'project'
});



conn.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
    app.listen(port,()=>{
        console.log('App listening on port: ',port)
    })
});

// conn.end((err) => {
//     if (err) {
//         console.error('Error closing MySQL connection:', err);
//         return;
//     }
//     console.log('MySQL connection closed');
// });
// app.use('/maiddetails',MaidRouter(conn))
// app.use('/',UserRouter(conn))